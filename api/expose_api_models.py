from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Astronaut, method_decorators= method_decorators)
    api.expose_object(database.models.AstronautMission, method_decorators= method_decorators)
    api.expose_object(database.models.Mission, method_decorators= method_decorators)
    api.expose_object(database.models.AstronautSkill, method_decorators= method_decorators)
    api.expose_object(database.models.AstronautTraining, method_decorators= method_decorators)
    api.expose_object(database.models.Cargo, method_decorators= method_decorators)
    api.expose_object(database.models.LaunchFacility, method_decorators= method_decorators)
    api.expose_object(database.models.Spaceport, method_decorators= method_decorators)
    api.expose_object(database.models.MissionOutcome, method_decorators= method_decorators)
    api.expose_object(database.models.MissionSpaceAgency, method_decorators= method_decorators)
    api.expose_object(database.models.SpaceAgency, method_decorators= method_decorators)
    api.expose_object(database.models.Spacecraft, method_decorators= method_decorators)
    return api
