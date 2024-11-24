# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 24, 2024 16:12:53
# Database: sqlite:////tmp/tmp.dzSpS33XF8-01JDFF1YE0S7RTFQYFNQK3T84N/Spaceport_System/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Astronaut(SAFRSBaseX, Base):
    """
    description: Represents an astronaut with personal information.
    """
    __tablename__ = 'astronauts'
    _s_collection_name = 'Astronaut'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    missions_count = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    AstronautSkillList : Mapped[List["AstronautSkill"]] = relationship(back_populates="astronaut")
    AstronautTrainingList : Mapped[List["AstronautTraining"]] = relationship(back_populates="astronaut")
    AstronautMissionList : Mapped[List["AstronautMission"]] = relationship(back_populates="astronaut")



class SpaceAgency(SAFRSBaseX, Base):
    """
    description: Represents a space agency overseeing missions.
    """
    __tablename__ = 'space_agencies'
    _s_collection_name = 'SpaceAgency'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    MissionSpaceAgencyList : Mapped[List["MissionSpaceAgency"]] = relationship(back_populates="space_agency")



class Spaceport(SAFRSBaseX, Base):
    """
    description: Represents a spaceport with basic information.
    """
    __tablename__ = 'spaceports'
    _s_collection_name = 'Spaceport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    LaunchFacilityList : Mapped[List["LaunchFacility"]] = relationship(back_populates="spaceport")
    MissionList : Mapped[List["Mission"]] = relationship(back_populates="spaceport")



class AstronautSkill(SAFRSBaseX, Base):
    """
    description: Represents skills possessed by astronauts.
    """
    __tablename__ = 'astronaut_skills'
    _s_collection_name = 'AstronautSkill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    skill_name = Column(String, nullable=False)
    level = Column(Integer, nullable=False)
    astronaut_id = Column(ForeignKey('astronauts.id'), nullable=False)

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("AstronautSkillList"))

    # child relationships (access children)



class AstronautTraining(SAFRSBaseX, Base):
    """
    description: Represents training sessions attended by astronauts.
    """
    __tablename__ = 'astronaut_training'
    _s_collection_name = 'AstronautTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    session_date = Column(Date, nullable=False)
    location = Column(String, nullable=False)
    astronaut_id = Column(ForeignKey('astronauts.id'), nullable=False)

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("AstronautTrainingList"))

    # child relationships (access children)



class LaunchFacility(SAFRSBaseX, Base):
    """
    description: Represents facilities used by spaceports for launches.
    """
    __tablename__ = 'launch_facilities'
    _s_collection_name = 'LaunchFacility'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)
    spaceport_id = Column(ForeignKey('spaceports.id'), nullable=False)

    # parent relationships (access parent)
    spaceport : Mapped["Spaceport"] = relationship(back_populates=("LaunchFacilityList"))

    # child relationships (access children)



class Mission(SAFRSBaseX, Base):
    """
    description: Represents a space mission including its details.
    """
    __tablename__ = 'missions'
    _s_collection_name = 'Mission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    launch_date = Column(Date, nullable=False)
    return_date = Column(Date)
    spaceport_id = Column(ForeignKey('spaceports.id'))

    # parent relationships (access parent)
    spaceport : Mapped["Spaceport"] = relationship(back_populates=("MissionList"))

    # child relationships (access children)
    AstronautMissionList : Mapped[List["AstronautMission"]] = relationship(back_populates="mission")
    CargoList : Mapped[List["Cargo"]] = relationship(back_populates="mission")
    MissionOutcomeList : Mapped[List["MissionOutcome"]] = relationship(back_populates="mission")
    MissionSpaceAgencyList : Mapped[List["MissionSpaceAgency"]] = relationship(back_populates="mission")
    SpacecraftList : Mapped[List["Spacecraft"]] = relationship(back_populates="current_mission")



class AstronautMission(SAFRSBaseX, Base):
    """
    description: Junction table linking astronauts to missions.
    """
    __tablename__ = 'astronaut_missions'
    _s_collection_name = 'AstronautMission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    astronaut_id = Column(ForeignKey('astronauts.id'), nullable=False)
    mission_id = Column(ForeignKey('missions.id'), nullable=False)

    # parent relationships (access parent)
    astronaut : Mapped["Astronaut"] = relationship(back_populates=("AstronautMissionList"))
    mission : Mapped["Mission"] = relationship(back_populates=("AstronautMissionList"))

    # child relationships (access children)



class Cargo(SAFRSBaseX, Base):
    """
    description: Represents cargo carried by missions.
    """
    __tablename__ = 'cargo'
    _s_collection_name = 'Cargo'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    weight = Column(Integer, nullable=False)
    content_description = Column(String, nullable=False)
    mission_id = Column(ForeignKey('missions.id'), nullable=False)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("CargoList"))

    # child relationships (access children)



class MissionOutcome(SAFRSBaseX, Base):
    """
    description: Represents the outcomes of a mission.
    """
    __tablename__ = 'mission_outcomes'
    _s_collection_name = 'MissionOutcome'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    mission_id = Column(ForeignKey('missions.id'), nullable=False)
    outcome = Column(String, nullable=False)
    details = Column(String)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("MissionOutcomeList"))

    # child relationships (access children)



class MissionSpaceAgency(SAFRSBaseX, Base):
    """
    description: Junction table linking missions to space agencies.
    """
    __tablename__ = 'mission_space_agencies'
    _s_collection_name = 'MissionSpaceAgency'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    mission_id = Column(ForeignKey('missions.id'), nullable=False)
    space_agency_id = Column(ForeignKey('space_agencies.id'), nullable=False)

    # parent relationships (access parent)
    mission : Mapped["Mission"] = relationship(back_populates=("MissionSpaceAgencyList"))
    space_agency : Mapped["SpaceAgency"] = relationship(back_populates=("MissionSpaceAgencyList"))

    # child relationships (access children)



class Spacecraft(SAFRSBaseX, Base):
    """
    description: Represents a spacecraft with its specifications.
    """
    __tablename__ = 'spacecraft'
    _s_collection_name = 'Spacecraft'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    model = Column(String, nullable=False)
    crew_capacity = Column(Integer, nullable=False)
    current_mission_id = Column(ForeignKey('missions.id'))

    # parent relationships (access parent)
    current_mission : Mapped["Mission"] = relationship(back_populates=("SpacecraftList"))

    # child relationships (access children)
