// const userName = document.querySelector('#userName');

// userName.addEventListener('keyup',(e)=>{
//     console.log('7777',7777);
//     e.preventDefault();
//     const userNameVal = e.target.value;

//     if(userNameVal.length>0){
//         fetch("/authentication/username-validate",{
//             body: JSON.stringify({username: userNameVal}),
//             method: 'POST',
//         })
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log('data',data);
//         });
//     }
    
// });

const userName = document.querySelector('#userName');

userName.addEventListener('keyup', (e) => {
    console.log('7777', 7777);
    e.preventDefault();
    const userNameVal = e.target.value;

    if (userNameVal.length > 0) {
        fetch("/authentication/username-validate", {
            body: JSON.stringify({ username: userNameVal }),
            method: 'POST',
        })
            .then((res) => {
                // Check if the response status is ok (status code between 200 and 299)
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
            })
            .catch((error) => {
                // Handle fetch errors, network issues, or server errors
                console.error('Fetch error:', error);
            });
    }
});
