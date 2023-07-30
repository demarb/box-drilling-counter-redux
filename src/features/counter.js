import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {
    level1: 0,
    level2: 0,
    level3: 0
}

const LEVEL_ONE = "INCREMENT_LEVEL_ONE";
const LEVEL_TWO = "INCREMENT_LEVEL_TWO";
const LEVEL_THREE = "INCREMENT_LEVEL_THREE";


export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: initialStateValue },
    reducers: {
        incrementCounter: (state, action) => {

            const { level } = action.payload;

            switch (level) {
                case LEVEL_ONE:
                    state.value.level1 += 1
                    state.value.level2 += 1
                    state.value.level3 += 1
                    break;

                case LEVEL_TWO:
                    state.value.level2 += 1
                    state.value.level3 += 1
                    break;

                case LEVEL_THREE:
                    state.value.level3 += 1
                    break;

                default:
                    break;
            }
        },

        decrementCounter: (state, action) => {

            const { level } = action.payload;

            switch (level) {
                case LEVEL_ONE:
                    state.value.level1 -= 1
                    state.value.level2 -= 1
                    state.value.level3 -= 1
                    break;

                case LEVEL_TWO:
                    state.value.level2 -= 1
                    state.value.level3 -= 1
                    break;

                case LEVEL_THREE:
                    state.value.level3 -= 1
                    break;

                default:
                    break;
            }
        }
    }
})

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;