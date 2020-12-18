import React from "react"

function WhatIsFB() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm mt-3 mb-3 mx-8">
                    <h4 className='mb-3'>So what is this "FizzBuzz" thingy? 🤔</h4>
                    <p>Glad you asked! FizzBuzz is a children's game designed for learning purposes. It teaches children division by making them count in increments of one, replacing any number divisible by three with the word "Fizz" and any number divisible by five with the word "Buzz". When players encounter a number disible by both three and five they say "Fizz Buzz"! Fairly simple ain't it?</p>
                    <p>Now in nerd's terms... In its most basic and common way, FizzBuzz is an algorithm that tests if a given number is divisible by three, five, or both, just like the children's game. Usually this algorithm prints all numbers from one to one hundred and displays them in the console, replacing the divisible ones for the correct word.</p>
                    <p>FizzBuzz has been a staple in programming interviews for quite some time and it is regarded as one of the fundamental coding challenges for junior programmers to showcase their coding abilities and thinking process. 💻‍‍💭</p>
                </div>
            </div>
        </div>
    );
}

export default WhatIsFB;