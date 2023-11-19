// Home.js
import React from 'react';
import { useLang } from './Langcontext';
import './hause.css'

const Home = () => {
  const { lang, switchLang } = useLang();

  return (
      <>
      <h1>{lang === 'de' ? 'Guten Tag' : lang === 'ar' ? 'مرحبا بكم' : 'здравствуйте'}</h1>
      <p>{lang === 'de' ? 'in diese plattform gibt es meine erste projekts für react , und dankeschöne' : lang === 'ar' ? ' في هذه المنصة ستجدون اول مشاريع لي بإستخدام ’رياكط’و شكرا,' : 'в этой платформе есть мой первый проект для реагирования, и спасибо'}</p>
    <div>
      <button className='bb' style={{margin:"10px" }} onClick={() => switchLang('ar')}>Arabic</button>
      <button className='bb' style={{margin:"10px"}} onClick={() => switchLang('ru')}>Russian</button>
      <button className='bb' style={{margin:"10px"}} onClick={() => switchLang('de')}>Deutsch</button>
    </div>
    </>
  );
};

export default Home;
