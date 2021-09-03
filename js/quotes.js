const quotes = [
    {
        quote: "휘둘리지 말고 내 자리를 지키자",
        author: "",
    },
    {
        quote: "대체될 수 없는, 내 자체가 네임드인 사람이 되자",
        author: "이지영",
    },
    {
        quote: "성공하자",
        author: "이지영",
    },
    {
        quote: "내가 꿈을 이루면 나는 누군가의 꿈이 된다",
        author: "",
    },
    {
        quote: "스스로가 자랑스러워질 때까지 멈추지 말자",
        author: "헨리 C. 링크",
    },
    {
        quote: "확신은 머리 차이가 아니라 반복의 차이다",
        author: "",
    },
    {
        quote: "나는 할 수 있다. 나는 어떤 일이든 해낼 수 있다",
        author: "",
    },
    {
        quote: "실력 없는 자존심만큼 비참한 것은 없다",
        author: "",
    },
    {
        quote: "목표를 낮추지 말고, 노력을 높이자",
        author: "",
    },
    {
        quote: "비록 아무도 과거로 돌아가 새 출발을 할 순 없지만, 누구나 지금 시작해 새 엔딩을 만들 수 있다",
        author: "칼 바드",
    },
    {
        quote: "현 순간이 내 전설이 되도록",
        author: "",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;