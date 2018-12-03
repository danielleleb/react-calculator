export const INPUT_UPDATED = 'INPUT_UPDATED';
export const INPUT_CLEARED = 'INPUT_CLEARED';


export function updateInput(input) {
    return {
        type: INPUT_UPDATED,
        payload: input
    }
}

// export function updateEquation(equation) {
//     console.log('equation', equation)
//
//     return {
//         type: EQUATION_UPDATED,
//         payload: equation
//     }
//
// }

export function clearInput() {
    return {
        type: INPUT_CLEARED,
        payload: ''
    }
}