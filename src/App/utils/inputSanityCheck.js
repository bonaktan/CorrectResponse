/* CONSTRUCTION OF INPUT
 * for context para magawa to, theres 2 accepted general formats sa input
 * 1. A number within 1-n, where n = length of valuelist
 * 2. A RANGE of number within 1-n, constucted like x-y with ff. rules
 *  a. x < y
 *  b. 1 =< (both x and y) =< n
 *
 * within this, theres modifier values
 * 1. -{format}: does the inverse of the normal behaviour
 * 2. {format}:{n}, where the values specified is set to n
 * 3. / -?{format}.* /: shorthand for 'x-{x+{count of .}}' in format 2
 *
 * and an uncategorized value
 * 1. . : undo operation
 *
 *  RULES:
 * - there MUST be only 1 format in an input
 * - modifier 2 MUST NOT be combined with any modifiers
 * - undo MUST have something to undo upon
 */
const parseInput = (input) => {
    // STEP 0: define flags
    const flags = {
        isUndo: false,
        isNumber: false,
        isRange: false,
        isInverse: false,
        isHardSet: false,
        isUsingShorthand: false,
    };

    // STEP 1: Determine if its an undo operation
    if (input === '.') {
        flags.isUndo = true;
        return flags; // early for efficiency
    }

    // STEP 2: Determine if any modifiers are present (and remove them)
    if (input[0] === '-') {
        flags.isInverse = true;
        input = input.substring(1);
    }
    alert(input);
    return false;
};

export default parseInput;
