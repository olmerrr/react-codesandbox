import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";





const myNews = [

  {

    id: 1, // добавили id

    author: 'Саша Печкин',

    text: 'В четверг, четвертого числа...'

  },

  {

    id: 2,

    author: 'Просто Вася',

    text: 'Считаю, что $ должен стоить 35 рублей!'

  },

  {

    id: 3,

    author: 'Max Frontend',

    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'

  },

  {

    id: 4,

    author: 'Гость',

    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'

  }

];



class News extends React.Component {

  render() {

    const { data } = this.props // аналогично записи const data = this.props.data

    let newsTemplate



    if (data.length) {

      newsTemplate = data.map(function(item) {

        return (

          <div key={item.id}>

            <p className="news__author">{item.author}:</p>

            <p className="news__text">{item.text}</p>

          </div>

        )

      })

    } else {

      newsTemplate = <p>К сожалению новостей нет</p>

    }



    return (

      <div className="news">

        {newsTemplate}

        {

          data.length ? <strong>Всего новостей: {data.length}</strong> : null

        }

      </div>

    );

  }

}



const Comments = () => {

  return <p>Нет новостей - комментировать нечего.</p>

}



const App = () => {

  return (

    <React.Fragment>

      <News data={myNews}/>

      <Comments />

    </React.Fragment>

  )

}



ReactDOM.render(

  <App />,

  document.getElementById('root')

);

