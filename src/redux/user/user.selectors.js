/*In computing, memoization or memoisation is an optimization technique 

used primarily to speed up computer programs by storing the results of expensive function calls 
and returning the cached result when the same inputs occur again.

 it’s a technique that executes a (pure) function once, saves the result in memory, 
 and if we try to execute that function again with the same arguments as before, 
it just returns that previously saved result without executing the function again.*/
import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
