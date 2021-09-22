const readlineSync = require('readline-sync');
var userInputNum = readlineSync.question("Please enter a number to check if it is a prime number or not: ");
var isPrime = true;

function isPrimeNum(inputNum)
{
	if(inputNum > 1)
	{
		for(var i = 2; i < inputNum; i++)
		{
			if(inputNum % i == 0)
			{
				isPrime = false;
				break;
			}
		}

		outputResult(isPrime);
	}
	else if(inputNum == 1 || inputNum == 0)
	{
		console.log("neither prime nor composite");
	}
	else {
		console.log("enter a valid input");
	}
}

function outputResult(result)
{
	if(isPrime)
	{
		console.log("it is prime");
	}
	else{
		console.log("it is not a prime");
	}
}

isPrimeNum(userInputNum);