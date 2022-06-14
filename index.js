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
    switch(true)
    {
        case (empYears <= 1):
            switch(true)
            {
                default:
                    console.log("Incentives not met");
                    break;
                case (empChecking >= 1):
                    console.log("Ship $50.00 Gift Card");
                    break;
            }
            break;
        case (empYears == 2):
            switch(true)
            {
                default:
                    console.log("Ship $100.00 Gift Card");
                    break;
                case (empChecking >= 3):
                    console.log("Ship $400.00 Gift Card");
                    break;
            }
            break;
        case (empYears == 3):
            switch(true)
            {
                default:
                    console.log("Ship $350.00 Gift Card");
                    break;
                case (empChecking >= 2):
                    console.log("Ship $700.00 Gift Card");
                    break;
            }
            break;
        case (empYears >= 4):
            switch(true)
            {
                default:
                    console.log("Ship set of knives");
                    break;
                case (empChecking >= 1):
                    console.log("Ship $3500.00 Gift Card");
                    break;
            }
            break;
    }

    // Output when activity is complete
    console.log(`${empId}: Processed`)
}