#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright("\t   Welcome to y4c5-quiz App. \n"));
let quiz_ops = await inquirer.prompt([
    {
        name: "ans",
        message: "Select a suitable Quiz",
        type: "list",
        choices: ["General Programming-Quiz", "Airthemetic-Quiz", "Logical Reasoning-Quiz", "National-Quiz(Pakistan)"]
    }
]);
//Quiz1
if (quiz_ops.ans === "General Programming-Quiz") {
    let quiz_q1 = await inquirer.prompt([
        {
            name: "q1a1",
            type: "list",
            message: "Q1:What is a Data Structure??",
            choices: ["A:" + "A Storage format that defines types of Data.",
                "B:" + "A Data Base.",
                "C:" + "A Database management system.",
                "D:" + "A Storage format that defines the way Data is Stored,Organized and Manipulated."] //ANSWER
        },
        {
            name: "q1a2",
            type: "list",
            message: "Q2:Which of the following is are popular Data structures?",
            choices: ["A:" + "any.",
                "B:" + "Arrays,Trees and Graphs.", //ANSWER
                "C:" + "String.",
                "D:" + "All of them."]
        },
        {
            name: "q1a3",
            type: "list",
            message: "Q3:What is an Array?",
            choices: ["A:" + "It organizes data so that a related set of values can be easily sorted or searched.",
                "B:" + "Items stored are of the same type.",
                "C:" + "Both A AND B.", //ANSWER
                "D:" + "None of the above."]
        },
        {
            name: "q1a4",
            type: "list",
            message: "Q4:What is TypeScript?",
            choices: ["A:" + "It's a statically typed superset of JavaScript that compiles to plain JavaScript.",
                "B:" + "It runs on any browser, host, and operating system.",
                "C:" + "It offers advanced features such as IntelliSense,Code completion and Safe refactorings etc.",
                "D:" + "All of the above."] //ANSWER
        },
        {
            name: "q1a5",
            type: "list",
            message: "Q5:If you will take 10 days to code a solution in C++ and 30 days to code it in Rust, how much time will it take to code with Rust API with C++ backend?",
            choices: ["A:" + "40 Days.", //ANSWER
                "B:" + "50 Days.",
                "C:" + "60 Days.",
                "D:" + "70 Days."]
        }
    ]);
    let score = 0;
    if (quiz_q1.q1a1 === "D:" + "A Storage format that defines the way Data is Stored,Organized and Manipulated.") {
        console.log(chalk.greenBright("Q1:D:Correct answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q1:Your answer was Incorrect.The correct answer is a Data structure a Storage format that defines the way Data is Stored,Organized and Manipulated."));
    }
    if (quiz_q1.q1a2 === "B:" + "Arrays,Trees and Graphs.") {
        console.log((chalk.greenBright("Q2:B:Correct answer.")));
        score++;
    }
    else {
        chalk.redBright;
        console.log(chalk.redBright("Q2:Your answer is incorrect.The correct answer is Arrays,Trees and Graphs."));
    }
    if (quiz_q1.q1a3 === "C:" + "Both A AND B.") {
        console.log(chalk.greenBright("Q3:C:Correct answer."));
        score++;
    }
    else {
        chalk.redBright;
        console.log(chalk.redBright("Q3:Your answer is incorrect.The correct answer is Both A AND B."));
    }
    if (quiz_q1.q1a4 === "D:" + "All of the above.") {
        console.log(chalk.greenBright("Q4:D:Correct answer."));
        score++;
    }
    else {
        chalk.redBright;
        console.log(chalk.redBright("Q4:Your answer was incorrect.The correct answer is All of the above."));
    }
    if (quiz_q1.q1a5 === "A:" + "40 Days.") {
        console.log(chalk.greenBright("Q5:A:Correct answer."));
        score++;
    }
    else {
        chalk.redBright;
        console.log(chalk.redBright("Q5:Your answer is incorrect.The correct answer is 40 Days."));
    }
    if (score == 5) {
        console.log(chalk.greenBright("Congrats you've got a perfect score " + score + " out of 5"));
    }
    if (score < 4) {
        console.log(chalk.grey("You've scored " + score + " out of 5,Better luck next time"));
    }
    if (score <= 0) {
        console.log(chalk.redBright("You've failed the quiz."));
    }
    console.log(chalk.italic.cyanBright("\t Thanks for using y4c5-quiz App and for taking this quiz.\n"));
}
;
//Quiz2
if (quiz_ops.ans === "Airthemetic-Quiz") {
    let quiz_q2 = await inquirer.prompt([
        {
            name: "q2a1",
            type: "list",
            message: "Q1:Yashaya got 91 marks in English,83 in Science,87 in Maths,81 in Urdu and 95 in Pak Studies.A student can get maximum 100 marks in each subject.What is the percentage of Yashaya in this examination?",
            choices: ["A:" + "82.8",
                "B:" + "85.6",
                "C:" + "87.4", // ANSWER
                "D:" + "89"]
        },
        {
            name: "q2a2",
            type: "list",
            message: "Q2:In an examination 80% of the candidates passed in Urdu and 85% in English,While 75% passed in both.If 45 candidates failed in both.Then the total number of candidates was?",
            choices: ["A:" + "225.",
                "B:" + "300.",
                "C:" + "400.",
                "D:" + "450."] //ANSWER
        },
        {
            name: "q2a3",
            type: "list",
            message: "Q3:The price of an article was first increased by 20% and later on decreased by 25% due to reduction in sales.What will be the next percentage change in final price of article.?",
            choices: ["A:" + "10%", //ANSWER
                "B:" + "20%",
                "C:" + "30%",
                "D:" + "45%"]
        },
        {
            name: "q2a4",
            type: "list",
            message: "Q4:What is 15% of 75?",
            choices: ["A:" + "10",
                "B:" + "11.25", //ANSWER
                "C:" + "12",
                "D:" + "14.24"]
        },
        {
            name: "q2a5",
            type: "list",
            message: "Q5:If the price of milk increases from Rs 60/kg to Rs 70/kg,Then by what percentage a person should decrease the consumption of milk so that expenditure remains the same?",
            choices: ["A:" + "7.05%",
                "B:" + "10.58%",
                "C:" + "12.74%",
                "D:" + "14.28%"] // ANSWER
        }
    ]);
    let score = 0;
    if (quiz_q2.q2a1 === "C:" + "87.4") {
        console.log(chalk.greenBright("Q1:C:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q1:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 87.4."));
    }
    if (quiz_q2.q2a2 === "D:" + "450.") {
        console.log(chalk.greenBright("Q2:D:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q2:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 450."));
    }
    if (quiz_q2.q2a3 === "A:" + "10%") {
        console.log(chalk.greenBright("Q3:A:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q3:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 10%."));
    }
    if (quiz_q2.q2a4 === "B:" + "11.25") {
        console.log(chalk.greenBright("Q4:B:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q4:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 11.25."));
    }
    if (quiz_q2.q2a5 === "D:" + "14.28%") {
        console.log(chalk.greenBright("Q5:D:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q5:Your answer was Incorrect ") + chalk.greenBright("The correct answer is 14.28%."));
    }
    if (score == 5) {
        console.log(chalk.greenBright("Congrats you've got a perfect score " + score + " out of 5"));
    }
    if (score < 5) {
        console.log(chalk.grey("You've scored " + score + " out of 5,Better luck next time"));
    }
    if (score <= 0) {
        console.log(chalk.redBright("You've failed the quiz "));
    }
    console.log(chalk.italic.cyanBright("\t Thanks for using y4c5-quiz App and for taking our Airthemetic-Quiz.\n"));
}
//Quiz3
if (quiz_ops.ans === "Logical Reasoning-Quiz") {
    let quiz_q3 = await inquirer.prompt([
        {
            name: "q3a1",
            type: "list",
            message: "Q1:Consider the following sequence: 10, 14, 12, 16, 14, 18, 16, 20 etc.What is the next number is the sequence?",
            choices: ["A:" + "16.",
                "B:" + "18.", // ANSWER
                "C:" + "22.",
                "D:" + "24."]
        },
        {
            name: "q3a2",
            type: "list",
            message: "Q2:What is 2 raised to the power 12?",
            choices: ["A:" + "14.",
                "B:" + "512.",
                "C:" + "1024.",
                "D:" + "4096."] // ANSWER
        },
        {
            name: "q3a3",
            type: "list",
            message: "Q3:Which one is the odd one pick it out?",
            choices: ["A:" + "Important.", // ANSWER
                "B:" + "Trivial.",
                "C:" + "Unimportant.",
                "D:" + "Insignificent."]
        },
        {
            name: "q3a4",
            type: "list",
            message: "Q4:A boy and a doctor were fishing by the Pool.The boy is the doctor's son,But the doctor is not the boy's father.Who is the doctor?",
            choices: ["A:" + "Father.",
                "B:" + "Step-Father.",
                "C:" + "Mother.", // ANSWER
                "D:" + "Kidnapper."]
        },
        {
            name: "q3a5",
            type: "list",
            message: "Q5:If a company decides to invest their money at the rate of 15% and the cost of task increase by 6%,How many years should they wait to get all tasks done together?",
            choices: ["A:" + "1 Year.",
                "B:" + "4 Years.", //ANSWER
                "C:" + "8 Years.",
                "D:" + "12 Years."]
        },
        {
            name: "q3a6",
            type: "list",
            message: "Q6:There are 7 tasks. What is the maximum number of tasks that can be done using the current funds of $10 Million?",
            choices: ["A:" + "4.",
                "B:" + "5.",
                "C:" + "6.", //ANSWER
                "D:" + "7."]
        }
    ]);
    let score = 0;
    if (quiz_q3.q3a1 === "B:" + "18.") {
        console.log(chalk.greenBright("Q1:B:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q1:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 18.If you notice the sequence carefully,You will see that it starts with 10 and every alternative number is generated by adding 4 or subtracting 2.To generate the number after 20,We need to subtract 2 from 20 which leads us to 18."));
    }
    if (quiz_q3.q3a2 === "D:" + "4096.") {
        console.log(chalk.greenBright("Q2:D:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q2:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 4096.You need to know the powers to two up to 10 at least.The powers of 2 are: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ..."));
    }
    if (quiz_q3.q3a3 === "A:" + "Important.") {
        console.log(chalk.greenBright("Q3:A:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q3:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is Important.All 3 other words related to the opposite meaning of the word important."));
    }
    if (quiz_q3.q3a4 === "C:" + "Mother.") {
        console.log(chalk.greenBright("Q4:C:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q4:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is Mother.The Doctor is the Mother of the boy and this makes the boy the son of the Doctor."));
    }
    if (quiz_q3.q3a5 === "B:" + "4 Years.") {
        console.log(chalk.greenBright("Q5:B:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q5:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 4 Years.Total cost of all tasks is $14 Million.For N years, 14 * (1.06)N = 10 * (1.15)N.Therefore N is 4.128 years so the company needs to waits approximately 4 years."));
    }
    if (quiz_q3.q3a6 === "C:" + "6.") {
        console.log(chalk.greenBright("Q6:C:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q6:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 6.6 tasks can be funded this includes all tasks except Launch a new Search Engine and this involves $9 Million with $1 Million left."));
    }
    if (score == 6) {
        console.log(chalk.greenBright("Congrats you've got a perfect score " + score + " out of 6"));
    }
    if (score < 6) {
        console.log(chalk.grey("You've scored " + score + " out of 6,Better luck next time"));
    }
    if (score <= 0) {
        console.log(chalk.redBright("You've failed the quiz "));
    }
    console.log(chalk.italic.cyanBright("\t Thanks for using y4c5-quiz App and for taking our Airthemetic-Quiz.\n"));
}
//Quiz4
if (quiz_ops.ans === "National-Quiz(Pakistan)") {
    let quiz_q4 = await inquirer.prompt([
        {
            name: "q4a1",
            type: "list",
            message: "Q1:Who was the first Governor General of Pakistan?",
            choices: ["A:" + "Mian Sir Abdur Rashid.",
                "B:" + "Liaquat Ali Khan.",
                "C:" + "Zahid Hussain.",
                "D:" + "Quaid-i-Azam."] // ANSWER
        },
        {
            name: "q4a2",
            type: "list",
            message: "Q2:After how many years did Pakistan got its first constitution?",
            choices: ["A:" + "9 Years.", // ANSWER
                "B:" + "10 Years.",
                "C:" + "12 Years.",
                "D:" + "15 Years."]
        },
        {
            name: "q4a3",
            type: "list",
            message: "Q3:What was the official language declared in 1956 constitution??",
            choices: ["A:" + "Urdu.",
                "B:" + "Hindi.",
                "C:" + "Bengali.",
                "D:" + "Urdu & Bengali both."] // ANSWER
        },
        {
            name: "q4a4",
            type: "list",
            message: "Q4:How many articles are there in 1973 constitution??",
            choices: ["A:" + "97.",
                "B:" + "125.",
                "C:" + "280.", // ANSWER
                "D:" + "350."]
        },
        {
            name: "q4a5",
            type: "list",
            message: "Q5:Pakistan's standard time was suggested by?",
            choices: ["A:" + "Chaudhary Rehmat Ali.",
                "B:" + "Proffessor Muhammad Anwar.", //ANSWER
                "C:" + "Liaqat Ali.",
                "D:" + "Maulana Mazhar-ud-din."]
        },
        {
            name: "q4a6",
            type: "list",
            message: "Q6:Which city id the capital of Pakistan?",
            choices: ["A:" + "Islamabad.", //ANSWER
                "B:" + "Peshawar.",
                "C:" + "Murree.",
                "D:" + "Karachi."]
        }
    ]);
    let score = 0;
    if (quiz_q4.q4a1 === "D:" + "Quaid-i-Azam.") {
        console.log(chalk.greenBright("Q1:D:Correct Answer"));
        score++;
    }
    else {
        console.log(chalk.redBright("Q1:Your answer was Incorrect, ") + chalk.greenBright("On 15th August 1947, Quaid-i-Azam was sworn in as the first Governor General of Pakistan."));
    }
    if (quiz_q4.q4a2 === "A:" + "9 Years.") {
        console.log(chalk.greenBright("Q2:A:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q2:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 9 Years."));
    }
    if (quiz_q4.q4a3 === "D:" + "Urdu & Bengali both.") {
        console.log(chalk.greenBright("Q3:D:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q3:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is Urdu and Bengali both."));
    }
    if (quiz_q4.q4a4 === "C:" + "280.") {
        console.log(chalk.greenBright("Q4:C:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q4:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is 280 Articles."));
    }
    if (quiz_q4.q4a5 === "B:" + "Proffessor Muhammad Anwar.") {
        console.log(chalk.greenBright("Q5:B:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q5:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is Proffessor Muhammad Anwar."));
    }
    if (quiz_q4.q4a6 === "A:" + "Islamabad.") {
        console.log(chalk.greenBright("Q6:A:Correct Answer."));
        score++;
    }
    else {
        console.log(chalk.redBright("Q6:Your answer was Incorrect, ") + chalk.greenBright("The correct answer is Islamabad."));
    }
    if (score == 6) {
        console.log(chalk.greenBright("Congrats you've got a perfect score " + score + " out of 6"));
    }
    if (score < 6) {
        console.log(chalk.grey("You've scored " + score + " out of 6,Better luck next time"));
    }
    if (score <= 0) {
        console.log(chalk.redBright("You've failed the quiz "));
    }
    console.log(chalk.italic.cyanBright("\t Thanks for using y4c5-quiz App and for taking our Pakistan-National Quiz.\n"));
}
