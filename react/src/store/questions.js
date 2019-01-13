import axios from 'axios';

const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const initialState = {
    isLoading: false,
    list: []
};

export const loadQuestions = () => (dispatch) => {
    dispatch({
        type: LOAD_QUESTIONS,
    });

    axios.get('https://api.github.com/users/vikks15/repos')
        .then(response => {
            dispatch({
                type: LOAD_QUESTIONS_SUCCESS,
                payload: response.data
            })
        }).catch(() => {
            // Если ошибка, то будет пустой
            dispatch({
                type: LOAD_QUESTIONS_SUCCESS,
                payload: []
            })
        });
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return Object.assign({}, state, {
                isLoading: true
            });
        case LOAD_QUESTIONS_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload,
                isLoading: false
            });
        default: return state;
    }
}

export default reducer;
