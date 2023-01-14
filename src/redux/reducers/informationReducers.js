import ActionTypes from "../constants/constants";

const initState = {
    personalInformation:null,
    personalInformationSuccess:false
}

export const informationReducer = (state = initState,{type,payload}) => {
    switch (type) {
        case ActionTypes.PERSONAL_INFORMATION:
            return {
                personalInformation:payload,
                personalInformationSuccess:true
            }
        default:
            return state
    }
}

//contact information
const contactState = {
    contactInformation:null,
    contactInformationSuccess:false
}

export const contactInformationReducers = (state = contactState,{type,payload}) => {
    switch (type) {
        case ActionTypes.CONTACT_INFORMATION:
            return {
                contactInformation:payload,
                contactInformationSuccess:true
            }
        default:
            return state
    }
}
//education information
const educationState = {
    educationalInformation:null,
    educationalInformationSuccess:false
}

export const educationalInformationReducers = (state = educationState,{type,payload}) => {
    switch (type) {
        case ActionTypes.EDUCATIO_INFORMATION:
            return {
                educationalInformation:payload,
                educationalInformationSuccess:true
            }
        
        default:
            return state
    }
}

//qualification information
const qualificationState = {
    qualificationInformation:null,
    qualificationInformationSuccess:false
}

export const qualificationInformationReducers = (state = qualificationState,{type,payload}) => {
    switch (type) {
        case ActionTypes.QUALIFICATION_INFORMATION:
            return {
                qualificationInformation:payload,
                qualificationInformationSuccess:true
            }
        
        default:
            return state
    }
}

//REFERENCES information
const referenceState = {
    referencesInformation:null,
    referencesInformationSuccess:false
}

export const referencesInformationReducers = (state = referenceState,{type,payload}) => {
    switch (type) {
        case ActionTypes.REFERENCES_INFORMATION:
            return {
                referencesInformation:payload,
                referencesInformationSuccess:true
            }
        
        default:
            return state
    }
}

//SKILL information
const skillState = {
    skillInformation:null,
    skillInformationSuccess:false
}

export const skillInformationReducers = (state = skillState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SKILL_INFORMATION:
            return {
                skillInformation:payload,
                skillInformationSuccess:true
            }
        
        default:
            return state
    }
}


//REFERENCES information
const workState = {
    workInformation:null,
    workInformationSuccess:false
}

export const workInformationReducers = (state = workState,{type,payload}) => {
    switch (type) {
        case ActionTypes.WORK_INFORMATION:
            return {
                workInformation:payload,
                workInformationSuccess:true
            }
        
        default:
            return state
    }
}

