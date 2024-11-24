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


from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Spaceport(Base):
    """description: Represents a spaceport with basic information."""
    __tablename__ = 'spaceports'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)


class Astronaut(Base):
    """description: Represents an astronaut with personal information."""
    __tablename__ = 'astronauts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    missions_count = Column(Integer)  # Derived attribute: count of missions


class Mission(Base):
    """description: Represents a space mission including its details."""
    __tablename__ = 'missions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    launch_date = Column(Date, nullable=False)
    return_date = Column(Date)
    spaceport_id = Column(Integer, ForeignKey('spaceports.id'))


class Spacecraft(Base):
    """description: Represents a spacecraft with its specifications."""
    __tablename__ = 'spacecraft'

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column(String, nullable=False)
    crew_capacity = Column(Integer, nullable=False)
    current_mission_id = Column(Integer, ForeignKey('missions.id'))


class AstronautMission(Base):
    """description: Junction table linking astronauts to missions."""
    __tablename__ = 'astronaut_missions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    astronaut_id = Column(Integer, ForeignKey('astronauts.id'), nullable=False)
    mission_id = Column(Integer, ForeignKey('missions.id'), nullable=False)


class Cargo(Base):
    """description: Represents cargo carried by missions."""
    __tablename__ = 'cargo'

    id = Column(Integer, primary_key=True, autoincrement=True)
    weight = Column(Integer, nullable=False)
    content_description = Column(String, nullable=False)
    mission_id = Column(Integer, ForeignKey('missions.id'), nullable=False)


class SpaceAgency(Base):
    """description: Represents a space agency overseeing missions."""
    __tablename__ = 'space_agencies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=False)


class MissionSpaceAgency(Base):
    """description: Junction table linking missions to space agencies."""
    __tablename__ = 'mission_space_agencies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    mission_id = Column(Integer, ForeignKey('missions.id'), nullable=False)
    space_agency_id = Column(Integer, ForeignKey('space_agencies.id'), nullable=False)


class LaunchFacility(Base):
    """description: Represents facilities used by spaceports for launches."""
    __tablename__ = 'launch_facilities'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)
    spaceport_id = Column(Integer, ForeignKey('spaceports.id'), nullable=False)


class AstronautTraining(Base):
    """description: Represents training sessions attended by astronauts."""
    __tablename__ = 'astronaut_training'

    id = Column(Integer, primary_key=True, autoincrement=True)
    session_date = Column(Date, nullable=False)
    location = Column(String, nullable=False)
    astronaut_id = Column(Integer, ForeignKey('astronauts.id'), nullable=False)


class MissionOutcome(Base):
    """description: Represents the outcomes of a mission."""
    __tablename__ = 'mission_outcomes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    mission_id = Column(Integer, ForeignKey('missions.id'), nullable=False)
    outcome = Column(String, nullable=False)
    details = Column(String)


class AstronautSkill(Base):
    """description: Represents skills possessed by astronauts."""
    __tablename__ = 'astronaut_skills'

    id = Column(Integer, primary_key=True, autoincrement=True)
    skill_name = Column(String, nullable=False)
    level = Column(Integer, nullable=False)
    astronaut_id = Column(Integer, ForeignKey('astronauts.id'), nullable=False)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date

# Spaceports Test Data
spaceport1 = Spaceport(name="Cape Canaveral", location="USA")
spaceport2 = Spaceport(name="Baikonur", location="Kazakhstan")
spaceport3 = Spaceport(name="Guiana", location="France")
spaceport4 = Spaceport(name="Vandenberg", location="USA")

# Astronauts Test Data
astronaut1 = Astronaut(first_name="Neil", last_name="Armstrong", birth_date=date(1930, 8, 5), missions_count=0)
astronaut2 = Astronaut(first_name="Buzz", last_name="Aldrin", birth_date=date(1930, 1, 20), missions_count=0)
astronaut3 = Astronaut(first_name="Yuri", last_name="Gagarin", birth_date=date(1934, 3, 9), missions_count=0)
astronaut4 = Astronaut(first_name="Valentina", last_name="Tereshkova", birth_date=date(1937, 3, 6), missions_count=0)

# Missions Test Data
mission1 = Mission(name="Apollo 11", launch_date=date(1969, 7, 16), spaceport_id=1)
mission2 = Mission(name="Vostok 1", launch_date=date(1961, 4, 12), spaceport_id=2)
mission3 = Mission(name="Soyuz 1", launch_date=date(1967, 4, 23), spaceport_id=2)
mission4 = Mission(name="STS-98", launch_date=date(2001, 2, 7), spaceport_id=1)

# Spacecraft Test Data
spacecraft1 = Spacecraft(model="Saturn V", crew_capacity=3, current_mission_id=1)
spacecraft2 = Spacecraft(model="Vostok-K", crew_capacity=1, current_mission_id=2)
spacecraft3 = Spacecraft(model="Soyuz", crew_capacity=2, current_mission_id=3)
spacecraft4 = Spacecraft(model="Space Shuttle", crew_capacity=7, current_mission_id=4)

# AstronautMission Test Data
astronaut_mission1 = AstronautMission(astronaut_id=1, mission_id=1)
astronaut_mission2 = AstronautMission(astronaut_id=2, mission_id=1)
astronaut_mission3 = AstronautMission(astronaut_id=3, mission_id=2)
astronaut_mission4 = AstronautMission(astronaut_id=4, mission_id=3)

# Cargo Test Data
cargo1 = Cargo(weight=1000, content_description="Satellite", mission_id=1)
cargo2 = Cargo(weight=500, content_description="Supplies", mission_id=2)
cargo3 = Cargo(weight=200, content_description="Materials", mission_id=3)
cargo4 = Cargo(weight=1200, content_description="Fuel", mission_id=4)

# SpaceAgency Test Data
agency1 = SpaceAgency(name="NASA", country="USA")
agency2 = SpaceAgency(name="Roscosmos", country="Russia")
agency3 = SpaceAgency(name="ESA", country="Europe")
agency4 = SpaceAgency(name="CNSA", country="China")

# MissionSpaceAgency Test Data
mission_agency1 = MissionSpaceAgency(mission_id=1, space_agency_id=1)
mission_agency2 = MissionSpaceAgency(mission_id=2, space_agency_id=2)
mission_agency3 = MissionSpaceAgency(mission_id=3, space_agency_id=2)
mission_agency4 = MissionSpaceAgency(mission_id=4, space_agency_id=1)

# LaunchFacility Test Data
facility1 = LaunchFacility(name="Pad A", capacity=5000, spaceport_id=1)
facility2 = LaunchFacility(name="Pad B", capacity=3000, spaceport_id=2)
facility3 = LaunchFacility(name="Facility 1", capacity=4000, spaceport_id=3)
facility4 = LaunchFacility(name="Facility 2", capacity=2000, spaceport_id=4)

# AstronautTraining Test Data
training1 = AstronautTraining(session_date=date(1968, 8, 1), location="Houston", astronaut_id=1)
training2 = AstronautTraining(session_date=date(1960, 10, 5), location="Star City", astronaut_id=2)
training3 = AstronautTraining(session_date=date(1965, 5, 20), location="Moscow", astronaut_id=3)
training4 = AstronautTraining(session_date=date(1975, 7, 22), location="Baikonur", astronaut_id=4)

# MissionOutcome Test Data
outcome1 = MissionOutcome(mission_id=1, outcome="Success", details="First moon landing.")
outcome2 = MissionOutcome(mission_id=2, outcome="Success", details="First human in space.")
outcome3 = MissionOutcome(mission_id=3, outcome="Failure", details="Tragic re-entry.")
outcome4 = MissionOutcome(mission_id=4, outcome="Success", details="ISS supply mission.")

# AstronautSkill Test Data
skill1 = AstronautSkill(skill_name="Piloting", level=5, astronaut_id=1)
skill2 = AstronautSkill(skill_name="Engineering", level=4, astronaut_id=2)
skill3 = AstronautSkill(skill_name="Research", level=3, astronaut_id=3)
skill4 = AstronautSkill(skill_name="Communication", level=4, astronaut_id=4)


session.add_all([spaceport1, spaceport2, spaceport3, spaceport4, astronaut1, astronaut2, astronaut3, astronaut4, mission1, mission2, mission3, mission4, spacecraft1, spacecraft2, spacecraft3, spacecraft4, astronaut_mission1, astronaut_mission2, astronaut_mission3, astronaut_mission4, cargo1, cargo2, cargo3, cargo4, agency1, agency2, agency3, agency4, mission_agency1, mission_agency2, mission_agency3, mission_agency4, facility1, facility2, facility3, facility4, training1, training2, training3, training4, outcome1, outcome2, outcome3, outcome4, skill1, skill2, skill3, skill4])
session.commit()
