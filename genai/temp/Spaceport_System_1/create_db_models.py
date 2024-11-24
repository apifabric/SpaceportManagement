# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Spaceport(Base):
    """
    description: Represents a spaceport where vehicles can land or takeoff.
    """
    __tablename__ = 'spaceport'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, unique=True, nullable=False)
    location = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)


class LaunchPad(Base):
    """
    description: Represents a launch pad at a spaceport.
    """
    __tablename__ = 'launch_pad'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    spaceport_id = Column(Integer, ForeignKey('spaceport.id'), nullable=False)


class Vehicle(Base):
    """
    description: Represents a space vehicle, such as a rocket or shuttle.
    """
    __tablename__ = 'vehicle'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, unique=True, nullable=False)
    type = Column(String, nullable=False)
    manufacture_date = Column(Date, nullable=False)
    spaceport_id = Column(Integer, ForeignKey('spaceport.id'))


class CrewMember(Base):
    """
    description: Represents a crew member assigned to a vehicle.
    """
    __tablename__ = 'crew_member'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))


class Mission(Base):
    """
    description: Represents a mission that a vehicle can be assigned to.
    """
    __tablename__ = 'mission'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    launch_date = Column(Date, nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))


class Payload(Base):
    """
    description: Represents the payload for a mission.
    """
    __tablename__ = 'payload'

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String, nullable=False)
    weight = Column(Integer, nullable=False)
    mission_id = Column(Integer, ForeignKey('mission.id'))


class Resource(Base):
    """
    description: Represents a resource available at a spaceport.
    """
    __tablename__ = 'resource'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)
    spaceport_id = Column(Integer, ForeignKey('spaceport.id'))


class Construction(Base):
    """
    description: Represents construction projects at a spaceport.
    """
    __tablename__ = 'construction'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date)
    spaceport_id = Column(Integer, ForeignKey('spaceport.id'))


class Inspection(Base):
    """
    description: Represents an inspection event at a spaceport.
    """
    __tablename__ = 'inspection'

    id = Column(Integer, primary_key=True, autoincrement=True)
    inspector = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    comments = Column(String)
    spaceport_id = Column(Integer, ForeignKey('spaceport.id'))


class LaunchSchedule(Base):
    """
    description: Represents a launch schedule for a vehicle.
    """
    __tablename__ = 'launch_schedule'

    id = Column(Integer, primary_key=True, autoincrement=True)
    launch_time = Column(DateTime, nullable=False)
    launch_pad_id = Column(Integer, ForeignKey('launch_pad.id'))
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))


class Maintenance(Base):
    """
    description: Represents scheduled maintenance tasks for vehicles.
    """
    __tablename__ = 'maintenance'

    id = Column(Integer, primary_key=True, autoincrement=True)
    task = Column(String, nullable=False)
    schedule_date = Column(Date, nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))


class Fuel(Base):
    """
    description: Represents fuel records for vehicles at the spaceport.
    """
    __tablename__ = 'fuel'

    id = Column(Integer, primary_key=True, autoincrement=True)
    fuel_type = Column(String, nullable=False)
    amount = Column(Integer, nullable=False)
    date_recorded = Column(Date, nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Test data for Spaceport\nspaceport1 = Spaceport(name='Alpha', location='Earth Orbit', capacity=10)\nspaceport2 = Spaceport(name='Beta', location='Mars Base', capacity=8)\nspaceport3 = Spaceport(name='Gamma', location='Lunar Base', capacity=5)\nspaceport4 = Spaceport(name='Delta', location='Asteroid Station', capacity=12)\n\n# Test data for LaunchPad\nlaunch_pad1 = LaunchPad(name='Pad 1', spaceport_id=1)\nlaunch_pad2 = LaunchPad(name='Pad 2', spaceport_id=2)\nlaunch_pad3 = LaunchPad(name='Pad 3', spaceport_id=3)\nlaunch_pad4 = LaunchPad(name='Pad 4', spaceport_id=4)\n\n# Test data for Vehicle\nvehicle1 = Vehicle(name='Explorer I', type='Shuttle', manufacture_date=date(2020, 5, 20), spaceport_id=1)\nvehicle2 = Vehicle(name='Discovery X', type='Rocket', manufacture_date=date(2019, 7, 15), spaceport_id=2)\nvehicle3 = Vehicle(name='Voyager', type='Probe', manufacture_date=date(2021, 8, 14), spaceport_id=3)\nvehicle4 = Vehicle(name='Pioneer', type='Shuttle', manufacture_date=date(2020, 11, 7), spaceport_id=4)\n\n# Test data for CrewMember\ncrew_member1 = CrewMember(name='John Doe', role='Pilot', vehicle_id=1)\ncrew_member2 = CrewMember(name='Jane Smith', role='Engineer', vehicle_id=2)\ncrew_member3 = CrewMember(name='Mike Brown', role='Navigator', vehicle_id=3)\ncrew_member4 = CrewMember(name='Emma Wilson', role='Scientist', vehicle_id=4)\n\n# Test data for Mission\nmission1 = Mission(name='Lunar Mission', launch_date=date(2023, 1, 25), vehicle_id=1)\nmission2 = Mission(name='Mars Probe', launch_date=date(2023, 5, 10), vehicle_id=2)\nmission3 = Mission(name='Asteroid Exploration', launch_date=date(2023, 8, 3), vehicle_id=3)\nmission4 = Mission(name='Deep Space', launch_date=date(2023, 10, 15), vehicle_id=4)\n\n# Test data for Payload\npayload1 = Payload(description='Lunar Rover', weight=500, mission_id=1)\npayload2 = Payload(description='Mars Samples', weight=300, mission_id=2)\npayload3 = Payload(description='Asteroid Drill', weight=400, mission_id=3)\npayload4 = Payload(description='Deep Space Kit', weight=600, mission_id=4)\n\n# Test data for Resource\nresource1 = Resource(name='Oxygen', quantity=10000, spaceport_id=1)\nresource2 = Resource(name='Fuel', quantity=5000, spaceport_id=2)\nresource3 = Resource(name='Water', quantity=4000, spaceport_id=3)\nresource4 = Resource(name='Food', quantity=7000, spaceport_id=4)\n\n# Test data for Construction\nconstruction1 = Construction(name='Landing Strip Expansion', start_date=date(2022, 3, 15), end_date=date(2022, 7, 15), spaceport_id=1)\nconstruction2 = Construction(name='Control Tower Upgrade', start_date=date(2022, 4, 1), end_date=date(2022, 9, 1), spaceport_id=2)\nconstruction3 = Construction(name='New Fuel Tanks', start_date=date(2022, 5, 20), end_date=date(2022, 11, 30), spaceport_id=3)\nconstruction4 = Construction(name='Research Lab Setup', start_date=date(2022, 7, 10), end_date=date(2023, 2, 28), spaceport_id=4)\n\n# Test data for Inspection\ninspection1 = Inspection(inspector='Inspector Alpha', date=date(2023, 1, 10), comments='All systems operational', spaceport_id=1)\ninspection2 = Inspection(inspector='Inspector Beta', date=date(2023, 2, 5), comments='Minor issues found', spaceport_id=2)\ninspection3 = Inspection(inspector='Inspector Gamma', date=date(2023, 3, 12), comments='Need maintenance', spaceport_id=3)\ninspection4 = Inspection(inspector='Inspector Delta', date=date(2023, 4, 20), comments='Ready for launch', spaceport_id=4)\n\n# Test data for LaunchSchedule\nlaunch_schedule1 = LaunchSchedule(launch_time=datetime(2023, 1, 25, 14, 0), launch_pad_id=1, vehicle_id=1)\nlaunch_schedule2 = LaunchSchedule(launch_time=datetime(2023, 5, 10, 9, 30), launch_pad_id=2, vehicle_id=2)\nlaunch_schedule3 = LaunchSchedule(launch_time=datetime(2023, 8, 3, 21, 15), launch_pad_id=3, vehicle_id=3)\nlaunch_schedule4 = LaunchSchedule(launch_time=datetime(2023, 10, 15, 5, 45), launch_pad_id=4, vehicle_id=4)\n\n# Test data for Maintenance\nmaintenance1 = Maintenance(task='Engine Check', schedule_date=date(2023, 2, 1), vehicle_id=1)\nmaintenance2 = Maintenance(task='Hull Inspection', schedule_date=date(2023, 3, 20), vehicle_id=2)\nmaintenance3 = Maintenance(task='Navigation System Update', schedule_date=date(2023, 4, 15), vehicle_id=3)\nmaintenance4 = Maintenance(task='Communication System Overhaul', schedule_date=date(2023, 6, 10), vehicle_id=4)\n\n# Test data for Fuel\nfuel1 = Fuel(fuel_type='Hydrogen', amount=1000, date_recorded=date(2023, 1, 15), vehicle_id=1)\nfuel2 = Fuel(fuel_type='RP-1', amount=2000, date_recorded=date(2023, 2, 10), vehicle_id=2)\nfuel3 = Fuel(fuel_type='Methane', amount=1500, date_recorded=date(2023, 3, 20), vehicle_id=3)\nfuel4 = Fuel(fuel_type='Liquid Oxygen', amount=3000, date_recorded=date(2023, 4, 5), vehicle_id=4)


session.add_all([# Test data for Spaceport\nspaceport1])
session.commit()
