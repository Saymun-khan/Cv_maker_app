import { combineReducers } from "redux";
import { contactInformationReducers, educationalInformationReducers, informationReducer, qualificationInformationReducers, referencesInformationReducers, skillInformationReducers, workInformationReducers } from './informationReducers';


const reducers = combineReducers({
    personalinfo:informationReducer,
    educationalinfo:educationalInformationReducers,
    contactinfo:contactInformationReducers,
    qualificationinfo:qualificationInformationReducers,
    skillinfo:skillInformationReducers,
    referencinfo:referencesInformationReducers,
    workinfo:workInformationReducers
})

export default reducers