/* Activity - Employee Rewards - Starter Code */
/* Construct conditional statements that meet the requirements: */
/* ================================== */

/*1. If the employee has 1 year or less with the company, 1 new checking account: Output: 'Ship 50.00 Gift Card'
Otherwise output:'Incentives not met'

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship 50.00 Gift Card'
Otherwise output:'Ship $100.00 Gift Card'

/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship 700.00 Gift Card'
Otherwise output:'Ship $350.00 Gift Card'

/*4. If the employee has 4+ years with the company, 1+ new checking accounts:  Output: 'Ship 3500.00 Gift Card'
Otherwise output:'Ship set of knives'
*/


// Variable declaration
const banker = [
    [56123, 5, 1], [77227, 1, 2], [66225, 5, 3], [56677, 5, 0], [22151, 2, 6]
]; //employeeId, checking, years

//<--Your code goes here-->
for(let x = 0; x < banker.length; x++)
{
    let empId = banker[x][0]; //employee Id number
    let empChecking = banker[x][1]; //number of new checking
    let empYears = banker[x][2]; //years employed
    if(empYears <= 1)
    {
        if(empChecking >=1)
        {
            console.log("Ship $50.00 Gift Card");
        }else
        {
            console.log("Incentives not met");
        }
    }else if(empYears == 2)
    {
        if(empChecking >= 3)
        {
            console.log("Ship $400.00 Gift Card");
        }else
        {
            console.log("Ship $100.00 Gift Card");
        }
    }else if(empYears == 3)
    {
        if(empChecking >= 2)
        {
            console.log("Ship $700.00 Gift Card");
        }else
        {
            console.log("Ship $350.00 Gift Card");
        }
    }else
    {
        if(empChecking >= 1)
        {
            console.log("Ship $3500.00 Gift Card");
        }else
        {
            console.log("Ship set of knives");
        }
    }
    // Output when activity is complete
    console.log(`${empId}: Processed`)
}