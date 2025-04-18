const { default: axios } = require("axios");

async function company_registration(req , res){
    const URL = "http://20.244.56.144/evaluation-service/users"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTY0MTY1LCJpYXQiOjE3NDQ5NjM4NjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUwM2I0M2I5LTU2M2QtNGE1Yi04NzJhLWRkNTUwODVhNDgxYSIsInN1YiI6ImF5dXNoLnNoYXJtYTJfY3MyMkBnbGEuYWMuaW4ifSwiZW1haWwiOiJheXVzaC5zaGFybWEyX2NzMjJAZ2xhLmFjLmluIiwibmFtZSI6ImF5dXNoIGt1bWFyIHNoYXJtYSIsInJvbGxObyI6IjIyMTUwMDA0NDIiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI1MDNiNDNiOS01NjNkLTRhNWItODcyYS1kZDU1MDg1YTQ4MWEiLCJjbGllbnRTZWNyZXQiOiJrckJNZWRGU05lcEpGYkVtIn0.7lcUKveCioGlSm4elAS6YMR9TYnaYh7GXZ7N7R-m2yE"

    let response = await fetch(URL , {
        method: "GET", 
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            }
        })

        if (!response.ok) {
            console.log("YES error throw");
            throw new Error("Network response was not ok");
        }
        
        const dataMain = await response.json();
        // console.log("YES data in local");
        res.json(dataMain);
}

module.exports = {company_registration};