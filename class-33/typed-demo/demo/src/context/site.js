import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SettingsProvider(props) {

  const [title, setTitle] = useState('My Awesome Website');
  const [twitter, setTwitter] = useState('jacob@twitter.com');

  const state = {
    title,
    twitter,
    changeTitle: setTitle,
    changeTwitter: setTwitter,
  }

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )

}

export default SettingsProvider;
