import React from "react";
import { Card } from "./components/facebookCard/Card";
import { OnlinerCard } from "./components/onlinerCard/OnlinerCard";
import { JobsCard } from "./components/jobsCard/JobsCard";
import { VkCard } from "./components/vkCard/VkCard";
import "./App.css";

const cards = [
  {
    name: "Dobby",
    surname: "",
    education: "Hogwarts ",
    post: "Dobby no longer has masters!",
    avatarUrl: "https://1.bp.blogspot.com/-BiUv7RzaIkU/Xkikc_qxeCI/AAAAAAAAn8Q/qlu5ldrq_2o-LRqtf1GCxXWug4y0Ef76gCNcBGAsYHQ/s1600/DOBBY2.jpg",
    date: "2 seconds ago",
  },
];


function App() {
  return (
    <div className="App">
      {cards.map((card) => {
        const { name, surname, date, post, avatarUrl, education } = card;

        return (
          <Card
            name={name}
            surname={surname}
            date={date}
            post={post}
            avatarUrl={avatarUrl}
            education={education}
          />
        );
      })}
      </div>
  )}
  const onlinerCards = [
    {
      theme: "АВТО ДЛЯ НАСТОЯЩИХ МУЖЧИН",
      comment: 1250,
      description: "Toyota Land Cruiser 200 после обновления стал более защищенным",
    },
  ];
  function App() {
    return (
      <div className="App">
        {onlinerCards.map((onlinerCard) => {
        const { theme, comment, description } = onlinerCard;

        return (
          <OnlinerCard
            theme={theme}
            comment={comment}
            description={description}
          />
        );
      })}
       </div>
  );
}
const jobsCards = [
  {
    title: "Разработчик внутренних продуктов Fullstack / Frontend / Backend)",
    company: "ООО СейГеймс",
    city: "Минск",
    titleDescription:
      "Расширенный соцпакет: медицинское страхование, корпоративные занятия английским, компенсация занятий спортом.",
    description:
      "XB Software — компания в области разработки веб- и мобильных решений. С 2008 года мы предоставляем услуги полного цикла по разработке программного обеспечения под заказ, а также разрабатываем и реализуем собственные ИТ продукты.",
    date: "3 сентября",
  },
];
function App() {
  return (
    <div className="App">
      {jobsCards.map((jobsCard) => {
        const { title, company, city, description, titleDescription, date } =
          jobsCard;

        return (
          <JobsCard
            title={title}
            company={company}
            city={city}
            titleDescription={titleDescription}
            description={description}
            date={date}
          />
        );
      })}
     </div>
);
}
const vkCards = [
  {
    name: "Марио",
    surname: "Касас",
    avatarUrl:
      "http://whatsnetworth.com/wp-content/uploads/2018/01/4acd5167fd3cb5872329b9dab580a389.jpeg",
    post: "Hi everyone👋🏻 I want to leave the cinema and become a Frontend developer.This is very cool, I hope I can do it!",
    date: "10 февраля 2021",
    likeCount: 128970,
    commentCount: "I support it! This is a cool idea",
  },
];
function App() {
  return (
    <div className="App">
      {vkCards.map((vkCard) => {
        const {
          avatarUrl,
          name,
          surname,
          post,
          date,
          likeCount,
          commentCount,
        } = vkCard;

        return (
          <VkCard
            avatarUrl={avatarUrl}
            name={name}
            surname={surname}
            post={post}
            date={date}
            likeCount={likeCount}
            commentCount={commentCount}
          />
        );
      })}
    </div>
  );
}
export default App;
