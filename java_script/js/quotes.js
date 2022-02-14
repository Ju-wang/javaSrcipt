const quotes = [
    {
        quotes: "겸손한 자만이 다스릴 것이요, 애써 일하는 자만이 가질 것이다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "고뇌없이 정신적 성장이란 있을 수 없고 인생의 향상도 불가능하다. 고뇌는 생활에 있어서 필요불가결의 유익한 존재이다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "군자는 기회가 없다고 불평하지 않는다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "기둥이 약하면 집이 흔들리듯, 의지가 약하면 생활도 흔들린다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "친구를 얻는 유일한 방법은 스스로 완전한 친구가 되는 것이다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "내가 만나는 사람은 누구나 그 어떤 면에서 나보다 더 낫다. 그런 점에서 나는 그에게서 배운다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "너 자신 외에 너에게 평화를 가져다 줄 수 있는 것은 없다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "너 자신을 최대로 활용하라. 왜냐하면 그것이 너에게 주어진 전부이기 때문이다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "누구나 약속하기는 쉽다. 그러나 그 약속을 이행하기란 쉬운 일이 아니다.",
        author: "Ralph Waldo Emerson",
    },
    {
        quotes: "누구에게나 배울 만한 요소가 있다. 그러므로 나는 그들의 제자이다.",
        author: "Ralph Waldo Emerson",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerHTML = todayQuote.quotes
author.innerHTML = todayQuote.author