import { Component } from 'react';
import {jsx} from 'react/jsx-runtime'
import { Description, Headline, IconReact, Link } from './components';

console.log(jsx);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: {
        className: 'learn',
      },
      headline: '리액트 러닝 가이드',
      description:
        '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.',
      link: {
        className: 'button',
        href: 'https://react.dev',
        target: '_blank',
        rel: 'noopener noreferrer',
        text: 'react.dev',
      },
    };
  }

  render() {
    const {
      container: { className: mainClassName },
      headline,
      description,
      link,
    } = this.state;
    const { text: linkText, ...restLinkProps } = link;
    console.log(import.meta.env);

    return (
      <main className={mainClassName}>
        <Headline>{headline}</Headline>
        <Description>{description}</Description>
        <Link 
          {...restLinkProps} 
          icon={<IconReact />}
          >
          {linkText}
        </Link>
        {jsx(Link, {
          ...restLinkProps,
          children: linkText,
        })}
      </main>
    );
  }
}

export default App;
