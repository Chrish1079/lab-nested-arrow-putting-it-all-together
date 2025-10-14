const userInfo = {
username: 'sam',
password: '1234'
};
function createLoginTracker(userInfo) {
let attemptCount = 0; 
return function(passwordAttempt) {
  attemptCount++;
  if (passwordAttempt === userInfo.password) {
    return "Login successful";
  }
  if (attemptCount > 3) {
     return "Account locked due to too many failed login attempts";
  }
  return `Attempt ${attemptCount}: Login failed`;
};
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
