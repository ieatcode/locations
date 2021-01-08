import {createSlice} from '@reduxjs/toolkit';
import {
    failedActionStatus,
    initActionStatus,
    resetActionStatus,
    successActionStatus
} from "../constants/status.constant";

const initialState = {
    locationList: null,
    status: {...resetActionStatus},
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        getList: state => ({
            ...state,
            status: {
                ...initActionStatus,
                type: 'getList'
            }
        }),
        getListSuccess: (state, {payload}) => ({
            ...state,
            locationList: payload,
            status: {
                ...successActionStatus,
                type: 'getList'
            }
        }),
        getListFailed: state => ({
            ...state,
            status: {
                ...failedActionStatus,
                type: 'getList'
            }
        }),
        add: state => ({
            ...state,
            status: {
                ...initActionStatus,
                type: 'addLocation'
            }
        }),
        addSuccess: state => ({
            ...state,
            status: {
                ...successActionStatus,
                type: 'addLocation'
            }
        }),
        addFailed: state => ({
            ...state,
            status: {
                ...failedActionStatus,
                type: 'addLocation'
            }
        }),
        details: state => ({
            ...state,
            status: {
                ...initActionStatus,
                type: 'details'
            }
        }),
        detailsSuccess: state => ({
            ...state,
            status: {
                ...successActionStatus,
                type: 'details'
            }
        }),
        detailsFailed: state => ({
            ...state,
            status: {
                ...failedActionStatus,
                type: 'details'
            }
        }),
        update: state => ({
            ...state,
            status: {
                ...initActionStatus,
                type: 'updateLocation'
            }
        }),
        updateSuccess: state => ({
            ...state,
            status: {
                ...successActionStatus,
                type: 'updateLocation'
            }
        }),
        updateFailed: state => ({
            ...state,
            status: {
                ...failedActionStatus,
                type: 'updateLocation'
            }
        }),
        deleteLocation: state => ({
            ...state,
            status: {
                ...initActionStatus,
                type: 'deleteLocation'
            }
        }),
        deleteLocationSuccess: state => ({
            ...state,
            status: {
                ...successActionStatus,
                type: 'deleteLocation'
            }
        }),
        deleteLocationFailed: state => ({
            ...state,
            status: {
                ...failedActionStatus,
                type: 'deleteLocation'
            }
        }),
        resetStatus: state => ({
            ...state,
            status: {
                ...resetActionStatus,
                type: 'resetStatus'
            }
        }),
    },
});

export default locationSlice;
