import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  ory: require('../assets/ory_07_-26.png'),
  dbg: require('../assets/dbg.jpg'),
  tac: require('../assets/tac.jpg'),
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  passport: require('../assets/passport-control1.jpg'),
  bouncer: require('../assets/bouncer1.jpg'),
  session: require('../assets/session/index.png'),
  sessionAllDevices: require('../assets/all-devices/index(9).png'),
  sso: require('../assets/sso/index.png'),
  sso2: require('../assets/sso-2/index(8).png'),
  sessionAllBackends: require('../assets/many-backends/index-2.png'),
  myself: require('../assets/myself.png'),
  vpn: require('../assets/vpn/index.png'),
  iap: require('../assets/iap/index.png'),
  mobile: {
    nobrowser: require('../assets/mobile/login-app.png'),
    legit: require('../assets/mobile/login-app-legitimate.png'),
    fake: require('../assets/mobile/login-app-counterfeit.png'),
  },
  github: {
    hydra: require('../assets/github/hydra.png'),
    oathkeeper: require('../assets/github/oathkeeper.png'),
  }, product: {
    hydra: require('../assets/product/hydra.png'),
    oathkeeper: require('../assets/product/oathkeeper.png'),
  },
  jwt: require('../assets/jwt.png')
};

preloader(images);

const theme = createTheme({
    primary: '#6274F3',
    secondary: '#fff',
    tertiary: '#2C2B59',
    quarternary: '#50E3C2',
    t01: '#152935',
    t02: '#5A6872',
    ui01: '#F5F7FA'
  }
  // primary: 'Rubik',
  // secondary: 'Rubik',
  // tertiary: 'monospace',
);

export default class Presentation extends React.Component {
  state = {
    steps: 0
  }

  render() {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary" notes={
          (
            <div>
              <p>Hi there, great to have you all here! Welcome to our open source strategy workshop</p>
              <p>With me is Thomas Curran, and my name is Aeneas Rekkas So, what is this all about?</p>
              <p>Publishing code on GitHub doesn't an open source project make.
                Participating in open source as an organization involves building communities,
                collaborating across teams, identifying appropriate licenses, moderating conversations,
                and grappling with intellectual property questions.</p>
              <p>We will outline some best practices and prepare you to create a world-class open source strategy.</p>
              <p>The workshop aims to explain how to set up open source communities both in the public domain “Open
                Source Software,” and in the enterprise “Inter Source Software.”
              </p>
              <p>Open source software is widely used today by companies in a broad range of industries,
                but it’s not always fully understood by the executive leaders and decision-makers running the
                operations.
              </p><p>

              Open source innovation has a methodology of its own and doesn’t follow traditional
              business processes. One of its biggest differences is that open source development is collaborative,
              while traditional software and business practices are proprietary and closed.
            </p><p>

              So really, Open Source comes with a culture change in an organization. A prime example for this
              is Microsoft which has moved from calling Linux a cancer to using, building, publishing and participating
              in open source. They joined the Invention Network Community (patent non-aggression pact for OSS vendors) last week.
            </p>
            </div>
          )}>
          <Heading size={1} caps textColor="secondary">
            Design your Open Source Strategy
          </Heading>
          <Heading size={5} textColor="tertiary" style={{ marginTop: '2rem' }}>
            Thomas Aidan Curran, Aeneas Rekkas
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>
                Before planning this talk we put ourselves in your seat and thought what we would like
                to hear if we were interested in starting an open source product.<br />

                The issue is, OSS is a very broad topic and it's hard to nail down a universal strategy that
                bears the next Kubernetes.<br />

                Instead, we want to share our knowledge with you and give you ample time to explore this topic
                interactively with us.<br />

                If we run out of time or you want to talk more in-depth about open source, we'll be here all day and
                would love to talk to any of you! You can approach us after the talk if you want.<br />

                Let's give you some structure by looking at the brief chapters of this workshop. The chapters are
                aligned with the open source journey. So first things first we have to look at how to get started.<br />

                Before you jump ahead and create your repository, throw in a license and start hacking, it's a good idea
                to understand what you are trying to achieve by going open source. For this, we will look at the
                so-called open source archetypes.<br />

                Once you have a better understanding of where your product fits in, it's important to have a framework.
                Open source is much more than just a license, so we will talk about communication architecture,
                automation,
                resource planning, and so on.<br />

                Once all of that is done and you have some code up on github, it's time to attract your first 10 users,
                then the next 100, the next 1000, the next million. We will give you some tips how to approach these
                milestones
                from our own experience.<br />

                But if you really want to learn and understand open source, the best way to get started is to contribute
                to existing projects. Here I want to walk you through how I approach contributing to open source
                software
                and the next step would be for you to choose a project and explore their open source approach.
              </p>
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Day 1 (land)
          </Heading>
          <Appear>
            <Heading size={2} textColor="secondary">
              Scaling Up (expand)
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="secondary">
              Learn by Example
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={1} textColor="tertiary">
            Thomas Curran
          </Heading>
          <Image style={{
            borderRadius: '200px',
            height: '200px', width: '200px', marginTop: '50px'
          }} src={images.tac.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              Deutsche Börse Group Technology Advisor, former CTO Bertelsman, Hybris (SAP), Deutsche Telekom
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
            </div>
          )}>
          <Image style={{ height: '300px', marginTop: '50px' }}
            src={images.dbg.replace('/', '')}
            margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              Frankfurt Stock Exchange (Eurex, Xetra, STOXX)
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>

              <p>I started developing games when I was about 12 years old, and quickly got into web technologies (2000 -
                we had a 56k modem and then ISDN)</p>
              <p>10 years ago (2008), I started an education (it's called serlo.org) non profit which currently serves
                about 1 million unique users per month</p>
              <p>The second company I started, called Ory (...next slide)</p>
            </div>
          )}>>
          <Heading size={1} textColor="tertiary">
            Aeneas Rekkas
          </Heading>
          <Image style={{
            borderRadius: '200px',
            height: '200px', width: '200px', marginTop: '50px'
          }} src={images.myself.replace('/', '')} margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              Founder & GitHub-native Developer, Security Expert
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              github.com/aeneasr | twitter.com/_aeneasr
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={
          (
            <div>
              <p>
                We build cloud native security products and rely soley on open source licenses.
              </p>
              <p>
                I chose the open source approach because as a developer, I am fed up by enterprise-sales constantly
                over-selling and under-delivering. Open source is the remedy of that and we had great success with our
                approach.
              </p>
              <p>
                Besides 16k GH Stars and 1 Million Docker Image Downloads, we have an extraordinary community of about
                700
                members, almost 300 contributors and adopters form all backgrounds.
              </p>
              <p>
                My goal for this workshop is to transfer the learnings I made with building ORY to you.
              </p>
            </div>
          )}>>
          <Image style={{ height: '300px', marginTop: '50px' }}
            src={images.ory.replace('/', '')}
            margin="0px auto 40px" />
          <Appear>
            <Text textColor="primary">
              Developer-first & Open Source Cloud Security Technology
            </Text>
          </Appear>
          <Appear>
            <Text textColor="primary">
              github.com/ory | www.ory.sh
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="primary" notes={
          (
            <div>
              <p>
                Ok, so now that we have the introduction all done, let's look at day 1. What do you need to get started?
                What tools support you in this endavour?
              </p>
            </div>
          )}>
          <Heading size={1} fit caps textColor="secondary">
            Day 1
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>
                The first important part is to understand where your product fits in. It's therefore important to
                talk about open source archetypes. These archetypes are nothing I invented but are the condensed
                knowledge of a mozilla report.
              </p>
            </div>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Archetypes
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              A framework For Purposeful Open Source (Mozilla, May 2018)
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>
                B2B Open source is designed to spur wide OEM adoption by partners and competitors
                alike. It drives out competing options because the license cost of zero discourages new entrants in the
                market. The best-known examples for B2B Open Source is Android and Chromium.
              </p>
              <p>
                It is worth noting that Google does not derive much direct revenue from Android. Instead,
                Android’s popularity puts Google’s products and search preferences in the hands of users,
                and that creates opportunities for Google. Android users default to Google’s search engine,
                buy media from Google, pay for apps in Google’s app store, provide a river of data for Google
                to mine, and favor Google’s app ecosystem (Calendar, Gmail, Maps, etc). All of that generates
                revenue and strategic advantage for Google.
              </p>
              <p>This archetype is thus a strategy for gaining marketshare as a revenue opportunity.
              </p>
            </div>
          )}>
          <Heading size={1} textColor="secondary">
            B2B Open Source
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              Android, Chromium
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>Multi-Vendor Infrastructure are large software projects that provide
                fundamental facilities to a wide array of other businesses. This infrastructure is designed
                collaboratively by multiple vendors and then each deploys it in their own way. Kubernetes
                and OpenStack are two prominent Multi-Vendor Infrastructure projects that most developers
                will have heard of.
              </p>
              <p>A good way to distinguish a Multi-Vendor
                Infrastructure project from Business-to-Business (B2B) Open Source is to look at how often
                contributors continue to participate after they switch employers. When that phenomenon
                occurs, it indicates that multiple organizations use the software as infrastructure in roughly
                the same way, and thus the same person may continue to work on this.
              </p>
              <p>
                Note that both the Multi-Vendor Infrastructure and the B2B Open Source archetypes are
                patterns that achieve benefits at scale. The largest advantage of open source to these
                ecosystems is broad standardization (including informal or de facto standardization).

                It would be difficult to achieve this with a proprietary approach; open source lowers the cost of
                participation and powers network effects that lead to scale.
              </p>
            </div>
          )}>
          <Heading size={1} textColor="secondary">
            Multi-Vendor Infrastructure
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              Kubernetes, Open Stack
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>The guiding principle behind the Trusted Vendor archetype is that nobody can build
              everything. Sometimes people just want a complete solution from a vendor. Switching costs
              for such products are often high, so choosing a proprietary solution could lock one into a
              technology and a vendor. That lock-in and the related dependence gives vendors power over
              their customers and users, which allows vendors to overprice and underdeliver. Customers
              and users too often find themselves trapped in a relationship that doesn’t meet their needs
              and sometimes feels abusive.<br />

              Open source is the antidote to vendor lock-in. First, it enables competition. If a vendor
              fails or pivots or suddenly raises prices, a functioning open source ecosystem can provide
              a replacement without high switching costs. Second, open source ecosystems tend toward
              open standards. Integration, custom development, or even switching all come easier, faster
              and cheaper if the underlying solution makes good use of common standards.<br />

              This connection between open source and risk-free vendor dependence is strong enough to
              shift customer preferences. More and more procurement processes are aimed at open source
              solutions precisely because they avoid lock-in during long-term vendor relations.<br />

              There are other elements of trust besides just defusing the threat of lock-in like participation.
              Those benefits are often mainly signaling mechanisms: even if customers
              never take direct advantage of the available collaboration mechanisms, they are reassured by
              the existence of those mechanisms.<br />
            </div>
          )}>
          <Heading size={1} textColor="secondary">
            Trusted Vendor
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              MongoDB
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>
                There are more types of open source software. Extremely open projects like GoLang or Rust, Dependencies
                such as OpenSSL and mass Market products like FireFox.
              </p>
              <p>
                The last archetype I want to touch is the "Bathwater" archetype.
              </p>
              <p>
                This is code dumped over the wall. It is purely about distribution, not about
                any particular mode of production. Think of it as the ground state of open source projects:
                someone publishes code under a free license but invests no followup effort into building
                open source dynamics.
              </p>
              <p>
                Typically, the published code is not the organization’s prized technology. In some cases it is a
                one-off publication and thus likely to become quickly outdated. In other cases, there may be
                a public repository, but that repository is not where development occurs — instead it is just a
                container for periodic snapshots of particular release points. Sometimes there is not even a
                public repository, and the only thing published is a release tarball or a sequence of them.

                Merely publishing code under an open source
                license is unlikely to generate any of the beneficial effects that come from truly investing
                in open source. When those benefits don’t materialize, developers sometimes take it as
                evidence that open source “doesn’t work”.
              </p>
              <p>
                Although experienced open source professionals look down on Bathwater projects, they do have
                some uses. First, they work as an initial foray into open source. For inexperienced firms testing
                the waters, there are few benefits from open sourcing this way but also few risks. They can claim
                to be doing open source, send signals that they are open to more open source engagement, and
                perhaps that positions them to do a more complete job the next time around.
              </p>
              <p>
                Second, even for firms experienced in open source, Bathwater is a reasonable final state for an
                abandoned initiative. When an organization is ready to stop devoting any resources to a project,
                explicitly putting the code into Bathwater mode, and giving the world permission to take it up,
                can be a final attempt to give the project a chance at impact and serve the existing user base.
              </p>
              <p>
                Bathwater treats the code like a forkable resource. Users of Bathwater projects don’t expect
                anything from upstream, because there is no upstream anymore, but they can can consider
                their involvement as a greenfield opportunity. If they are willing to invest in the code, they
                can choose any one of the other archetypes and start building toward it.
              </p>
            </div>
          )}>
          <Heading size={2} fit textColor="secondary">
            Golang, OpenSSL, libmp4, FireFox, -
          </Heading>
          <Appear>
            <Text textColor="primary">
              Wide Open, Upstream Dependency, Mass Market, Bathwater
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={2} fit textColor="secondary">
            Inter Source Software
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <p>
                We're still at day one, now you have some product idea, you are able to tell which archetype it is
                and have a long term business vision for it as well.
              </p>
              <p>
                So how do you get from zero to one? Well, we want to give you a framework which you can apply for your
                open source strategy
              </p>
            </div>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Framework
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <ul>
                <li>- First step is understanding how OSS ecosystems work</li>
                <li>- No talk can ever teach this</li>
                <li>- So the easiest thing you can do is to experience it yourself</li>
                <li>- Pick a product which fits your OSS archetype, check out their communication infrastructure, their rules, read issue
                and documentation, understand what it's all about - and contribute to the project. Even contributing simple things will expose you
                  to the open source mindest and help you tremendously in understanding how this works.
                </li>
              </ul>
            </div>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Contribute!
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              <ul>
                <li>Pick an ecosystem you want to target</li>
                <li>Pick the best technology to address your issue. Don't just do Java because you've done Java all your life</li>
                <li>Are you writing something that runs as a server? Make it work out of the box with kubernetes</li>
                <li>Are you writing a frontend? Integrate it in the ES6 ecosystem, choose something developers are familiar with like React or Vue</li>
                <li>Are you writing something performance critical that runs on the network? Choose a language like Go</li>
                <li>All of these decisions will result in a better product quality. It will raise awareness in the community</li>
                <li>The synergies with other tools and platforms, like google cloud or aws, will drive adoption</li>
                <li>All of these things are important to get right. Don't just do what feels comfortable. Do what's challenging and use the right tools.</li>
              </ul>
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Ecosystem
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              Resource planning is imperative. Open Source is a lot of work, in fact it's more work than closed source
              bespoke software. Why? You must be excellent in what you do, document it excellently, manage the
              community,
              find consensus, give support.

              Can we financially sponsor the project? Do we have an internal executive champion?

              Is it possible to join efforts with an existing open source project?

              Can we launch and maintain the project using the OSS model?
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Resource Planning
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              Successful Open Source is a ton of work
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              Resource planning is imperative. Open Source is a lot of work, in fact it's more work than closed source
              bespoke software. Why? You must be excellent in what you do, document it excellently, manage the
              community,
              find consensus, give support.
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Automation
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              Continuous Integration
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Documentation
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Guidelines
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="primary">
              Bots
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
              Code Quality
              Documentation Quality
              Automation Quality
              Marketing Quality
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Quality
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            Communication Infrastructure
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              Mattermost
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="quarternary">
              Discourse
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="quarternary">
              Slack, Discord, ...
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={2} textColor="secondary">
            License
          </Heading>
          <Appear>
            <Heading size={4} textColor="primary">
              Apache 2.0, MIT, GPL, MPL, ...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="quarternary">
              tldrlegal.com
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="quarternary">
              fossa.io
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Expand
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={1} fit caps textColor="secondary">
            The three pillars
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              Engage
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="primary">
              Motivate
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="primary">
              Lead
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={1} fit caps textColor="secondary">
            Getting Traction
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={1} fit caps textColor="secondary">
            First 10 Adopters
          </Heading>
          <Appear>
            <Heading size={3} textColor="primary">
              Raise target-audience awareness
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={1} fit caps textColor="secondary">
            Next 1000 Adopters
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <div>
            </div>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Learn by Example
          </Heading>

        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <ul>
              <li>https://www.linuxfoundation.org/wp-content/uploads/2017/10/Open_Source_Project_Launch_Checklist.pdf</li>
            </ul>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Q & A
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgDarken={0.75} bgColor="tertiary" notes={
          (
            <ul>
              <li>Monetization</li>
              <li>Pitfalls</li>
              <li>Support from Top Management</li>
              <li>Funding</li>
              <li>Day-to-day Experience</li>
            </ul>
          )}>
          <Heading size={2} fit caps textColor="secondary">
            Q & A
          </Heading>
        </Slide>


        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>Let's warm up a bit by refreshing some important terminologies. This probably isn't new to you*/}
        {/*but it's still good to have a clear picture in mind.</p>*/}
        {/*<p>Authentication describes the process of attesting, for example, an identity</p>*/}
        {/*<p>Here we have an officer at the border checking our passport. Typically, they check the image and*/}
        {/*compare*/}
        {/*it with my face. He authenticates your identity</p>*/}
        {/*<p>Confirming your identity however is not equal to allowing you entry, which brings up to the second*/}
        {/*concept</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Authentication*/}
        {/*</Heading>*/}
        {/*<Image style={{*/}
        {/*borderRadius: '256px',*/}
        {/*height: '256px', width: '256px', marginTop: '50px'*/}
        {/*}} src={images.passport.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>This brings us to the second term: Authorization</p>*/}
        {/*<p>In this example, this tough looking bouncer is denying you entry to the club. He applies some rule*/}
        {/*or policy ("No blue jeans") to you and decides if you're allowed to enter or not. He performs access*/}
        {/*control,*/}
        {/*the proper term would be "Policy Enforcement Point", because he enforces the policy (barring you from*/}
        {/*entry)</p>*/}
        {/*<p>So authorization is the function of specifying access rights to resources.</p>*/}
        {/*<p>What's important with these two terms is that they're completely separate. The bouncer does not need*/}
        {/*to identify you. Similarly, in a web service, a anonymous user might still have some access priviledges.*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Authorization*/}
        {/*</Heading>*/}
        {/*<Image style={{*/}
        {/*borderRadius: '256px',*/}
        {/*height: '256px', width: '256px', marginTop: '50px'*/}
        {/*}} src={images.bouncer.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>Next we will check out some common access control design patterns and their issues</p>*/}
        {/*<p>Here we have a simple web server (website, blog) which users access through a browser</p>*/}
        {/*<p>The user exchanges his username and password for a session which is typically stored in a browser*/}
        {/*cookie</p>*/}
        {/*<p>The cookie contains the user's id and maybe some other data as well and is used on whenever the user*/}
        {/*access the server through the browser0</p>*/}
        {/*<p>This is the easiest access control you can find. There are countless frameworks and SDKs available for*/}
        {/*implementing this and also adding authorization via RBAC or ACL</p>*/}
        {/*<p>You'll find this concept everywhere, especially in tools like wordpress</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*}} src={images.session.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>In larger businesses we typically have multiple services, developed by different people.</p>*/}
        {/*<p>If we apply the previous pattern here, each service has either its own own user management or somehow*/}
        {/*synchronises*/}
        {/*the users with the other services, by accessing the same database for example</p>*/}
        {/*<p>This has either bad user experience, because the user needs multiple user accounts</p>*/}
        {/*<p>or bad developer experience, because the developer needs to synch the data somehow</p>*/}
        {/*<p>Also, the username and password combination is shared across all those services. If the user uses the*/}
        {/*same password across all of his accounts*/}
        {/*or you have some type of synchronization, every rogue developer can impersonate the user or sell the*/}
        {/*data</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.sessionAllBackends.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>The probably well-known solution to this is called SSO (single sign on)</p>*/}
        {/*<p>Here, all user data is stored in a central repository called the identity provider</p>*/}
        {/*<p>Users exchange their username and password at that identity provider and get temporary credentials</p>*/}
        {/*<p>Now, the services don't need to synchronize the data because it's stored in a central place,*/}
        {/*and they don't have access to the user's long living credentials (username + password). They only*/}
        {/*get a token which is probably only valid for their service</p>*/}
        {/*<p>At deutsche börse, you solve this with OpenAM if I recall correctly</p>*/}
        {/*<p>So in conclusion, exchange user credentials for new, restricted, and temporary credentials (like a*/}
        {/*token)</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.sso.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Appear>*/}
        {/*<Text textColor="primary">*/}
        {/*1. Exchange user credentials for new, temporary credentials with limited scope*/}
        {/*</Text>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"*/}
        {/*notes={(*/}
        {/*<div>*/}
        {/*<p>There are generally to types of tokens, pass-by-value and pass-by-reference</p>*/}
        {/*<p>Here we see a pass-by-value token, more specifically a JSON Web Token</p>*/}
        {/*<p>On the left you see it's encoded form - it's basically base64 encoded JSON</p>*/}
        {/*<p>We have a header which says what cryptographic algorithm was used</p>*/}
        {/*<p>We have the payload which is populated by the developer</p>*/}
        {/*<p>And we have a signature which is generated using a secret or a public/private keypair</p>*/}
        {/*<p>Only the person with the right secret can create the proper signature</p>*/}
        {/*</div>*/}
        {/*)}*/}
        {/*>*/}
        {/*<Heading size={2} textColor="tertiary">*/}
        {/*Pass-by-value*/}
        {/*</Heading>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px'*/}
        {/*}} src={images.jwt.replace('/', '')} margin="40px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(*/}
        {/*<div>*/}
        {/*<p>*/}
        {/*In general, pass-by-value tokens are a preferred choice by developers and you encounter them quite often.*/}
        {/*</p><p>*/}
        {/*Developers love these because the information is encoded in the token itself and easily extractable*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*It's also possible to verify the validity ("authentication") of the token without doing a network*/}
        {/*roundtrip.*/}
        {/*We can use a public key or a shared secret, depending on what was used to sign the token*/}
        {/*</p>*/}
        {/*<p>Obviously, this also means that we can't revoke tokens on short notice but have to wait until the*/}
        {/*token expires. This can be very bad in situations where you need to revoke tokens immediately.</p>*/}

        {/*<p>Another downside is that the token's payloads can be read by anyone that has a token. I started this*/}
        {/*slide*/}
        {/*by saying that developers love pass-by-value tokens. They love them because it's easy to share information*/}
        {/*across several services. Well, some data might be confidential and (out of naivity) exposing that*/}
        {/*information*/}
        {/*is actually a security risk*/}
        {/*</p>*/}
        {/*<p>The only way to solve that is through encryption of the payloads, which increases complexity again</p>*/}
        {/*<p>Popular examples for pass-by-value tokens are SAML Assertions and JSON Web Tokens</p>*/}
        {/*</div>*/}
        {/*)}*/}
        {/*>*/}
        {/*<Heading size={2} textColor="tertiary">*/}
        {/*Pass-by-value*/}
        {/*</Heading>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Information is self-contained</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Validation without network round-trip</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Without network round-trip, no revokation</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Payloads are transparent unless encrypted</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">SAML</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">JSON Web Tokens</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(<div>*/}
        {/*<p>Pass-by-reference tokens are a unique ID</p>*/}
        {/*<p>The server uses a database (or the filesystem) where the session's information is stored.</p>*/}
        {/*<p>The information is totally opaque to the token holder and the server typically doesn't expose any session*/}
        {/*related information</p>*/}
        {/*<p>As we're doing a look up in a database or in the file system, real-time revokation (blacklisting) is*/}
        {/*possible too</p>*/}
        {/*<p>On the downside, we need a network roundtrip for validation (filesystems typically don't scale that*/}
        {/*well)</p>*/}
        {/*<p>Also, no standard exists that defines these tokens as their implementation may be different in every*/}
        {/*system.</p>*/}
        {/*</div>)}>*/}
        {/*<Heading size={2} textColor="tertiary">*/}
        {/*Pass-by-reference*/}
        {/*</Heading>*/}
        {/*<Appear>*/}
        {/*<Heading size={3} fit textColor="primary" margin="20px 0">*/}
        {/*a1656cbf-01d0-4700-a400-e254e8aadd98*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Information is opaque to clients</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Revokation is possible</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Needs network roundtrip for validation</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">No standard</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(<div>*/}
        {/*<p>The best advice I can give you is to use both types. This applies especially to distributed systems*/}
        {/*constructor "cloud native" environments where we deal with multiple services, API gateways, and so on.</p>*/}
        {/*<p>*/}
        {/*So what you do is issue pass-by-reference tokens to the outside world. That means that nobody can read*/}
        {/*thos tokens and you can easily revoke them</p>*/}
        {/*<p>Then, you convert these references to pass-by-value tokens at your API gateway</p>*/}
        {/*<p>And get all the benefits of pass-by-value internally without the disadvantages related to revokation and*/}
        {/*transparency</p>*/}
        {/*</div>)}>*/}
        {/*<Heading caps size={2} textColor="primary">*/}
        {/*Combine both*/}
        {/*</Heading>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Use pass-by-reference in the outside world</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Convert pass-by-reference to pass-by-value at your API gateway</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">Use pass-by-value internally</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>Ok, we covered now what types of tokens exist, and that it's a good idea to have an SSO provider when*/}
        {/*you have multiple services in your IT infrastructure.</p>*/}
        {/*<p>That doesn't fully reflect todays world though, we were working under the assumption that we have only*/}
        {/*on consumer (the browser)</p>*/}
        {/*<p>Today though, we have IoT devices like smart homes or smart cars, mobile apps, pcs, browser apps,*/}
        {/*native apps*/}
        {/*and even third parties that do business on top of our APIs</p>*/}
        {/*<p>*/}
        {/*Just having an SSO provider that allows us to "POST" the username and password to it and get a token*/}
        {/*back*/}
        {/*is maybe not such a good idea, especially when we look to 3rd parties.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*Imagine a third party - for example my company - needing access to your users usernames and passwords*/}
        {/*in order for me to be able to access the data from those users. That's ridiculous, right?*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*If you encounter such a complex environment, you might want to consider delegated protocols such as*/}
        {/*OAuth2*/}
        {/*and OpenID Connect on top of your existing authentication and authorization infrastructure (LDAP,*/}
        {/*OpenAM, ...)*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.sessionAllDevices.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Appear>*/}
        {/*<Text textColor="primary">*/}
        {/*2. Consider federated protocols (e.g. OAuth2, OpenID Connect) for 3rd party access*/}
        {/*</Text>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>While we're at the topic of mobile authentication, I want to quickly go over this very important topic*/}
        {/*as well,*/}
        {/*because that is, in my opinion, one of the worst practices of the last years in terms of sign on*/}
        {/*security</p>*/}
        {/*<p>Consider the following images. Here we have two mobile apps. The left is the "vendor" app you*/}
        {/*implemented</p>*/}
        {/*<p>the right one is a counterfeit app (for phishing) that I was able to sneak in the app store under a*/}
        {/*very similar name</p>*/}
        {/*<p>the user is unable to spot the difference between the two - the images are identical</p>*/}
        {/*<p>but the app on the right records the username+password and sends them to my server, i have now full*/}
        {/*control over the user's account</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '40%',*/}
        {/*float: 'left'*/}
        {/*}} src={images.mobile.nobrowser.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '40%',*/}
        {/*float: 'right'*/}
        {/*}} src={images.mobile.nobrowser.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>Now check this image, again the counterfeit app on the right, the legit on the left</p>*/}
        {/*<p>Can you now spot the difference?</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '40%',*/}
        {/*float: 'left'*/}
        {/*}} src={images.mobile.legit.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '40%',*/}
        {/*float: 'right'*/}
        {/*}} src={images.mobile.fake.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>So please, use the browser as a trusted intermediary for authentication processes. Don't rely on native*/}
        {/*UIs!</p>*/}
        {/*<p>Some users are still blind to this, but it provides at least some way of identifying where I log in</p>*/}
        {/*<p>So a year ago I downloaded an app from stadtsparkasse. And I wasn't sure if that was actually from the*/}
        {/*company*/}
        {/*or a scam</p>*/}
        {/*<p>It provided no way of me knowing where I log in (the legitimate website) and wether or not my data is*/}
        {/*being phished</p>*/}
        {/*<p>So I never used this app. Most users aren't that suspicious.</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.sso2.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Appear>*/}
        {/*<Text textColor="primary">*/}
        {/*3. Use the browser as a trusted intermediary for authentication*/}
        {/*</Text>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>The last topic I want to touch is the BeyondCorp security framework developed at Google</p>*/}
        {/*<p>In 2009 McAffee discovered a sophisticated APT (Advanced Persistent Threat) attack named operation*/}
        {/*aurora.</p>*/}
        {/*<p>The attack originated in Beijing and is associated to the chinese military</p>*/}
        {/*<p>The attackers targeted Adobe, Rackspace, Yahoo, Symantec, Google, and others</p>*/}
        {/*<p>*/}
        {/*According to McAfee, the primary goal of the attack was to gain access to and potentially modify source*/}
        {/*code repositories at these high tech, security and defense contractor companies.*/}
        {/*</p>*/}
        {/*<p>[The SCMs] were wide*/}
        {/*open," says Alperovitch. "No one ever thought about securing them, yet these were the crown jewels of*/}
        {/*most of these companies in many ways—much more valuable than any financial or personally identifiable*/}
        {/*data*/}
        {/*thatthey may have and spend so much time and effort protecting."[11]*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Heading size={1} fit textColor="primary">*/}
        {/*Google BeyondCorp*/}
        {/*</Heading>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={*/}
        {/*(*/}
        {/*<div>*/}
        {/*<p>Before 2009, Google looked like this. Most companies still look like that today.</p>*/}
        {/*<p>In that system we have like a trusted environment. Here, clients have priviledged access to the*/}
        {/*internal resources</p>*/}
        {/*<p>This security model has the concept of physical premises. If we plug the lan cable into our pc,*/}
        {/*then we need to be priviledged because we're in the building, right?</p>*/}
        {/*<p>For external traffic, we have a tight gateway which is typically a VPN proxy. There we need*/}
        {/*to pass access control before we can act like we would if we were plugged in the LAN</p>*/}
        {/*<p>Not only are VPNs notoriously painful to set up, and there are just so many devices around today</p>*/}
        {/*<p>But let's come back to Aurora. Apparently, the attackers where able to get in the intranet*/}
        {/*which lead to priviledged access to source code and configuration items which were unprotected as*/}
        {/*sysadmins assumed that any access has to come from within the elevated environment</p>*/}
        {/*</div>*/}
        {/*)}>>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.vpn.replace('/', '')} margin="0px auto 40px" />*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary" notes={(*/}
        {/*<div>*/}
        {/*<p>Once the thread was eliminated, Google worked on an alternative that better suits todays needs with*/}
        {/*regards*/}
        {/*to bring your own device policies and Advanced Persistent Threats</p>*/}
        {/*<p>So what they propose and use internally is the usage of an Identity & Access Proxy which is deployed*/}
        {/*alongside any application that is accessible via the internet</p>*/}
        {/*<p>*/}
        {/*Also, there is no distinction between intranet and public net, every client has to properly authenticate*/}
        {/*using the SSO provider, and pass access control in the IAP.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*The IAP actually uses the best practice we talked about earlier - it converts whatever credentials it gets*/}
        {/*(e.g. TLS client certificate) to a easily consumale JSON Web Token that contains all relevant session*/}
        {/*information*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*What's also great about this approach is that you can actually solve most of the authorization within the*/}
        {/*proxy by specifying RBAC rules or ACL rules or other type of access control policies.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*And lastly, a trend we're seeing and which we're also working on is anomaly detection. In this system, all*/}
        {/*traffic passes through a gateway before reaching the server. The gateway has all the information on the*/}
        {/*user's identity, the origin of the request, and the resources and permissions the request needs. This is*/}
        {/*the perfect data for use in machine learning in the context of anomaly detection.*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.iap.replace('/', '')} margin="40px auto 40px" />*/}
        {/*<Appear>*/}
        {/*<Text textColor="primary">*/}
        {/*4. Protect all services with an Identity and Access Proxy*/}
        {/*</Text>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<Text textColor="primary">*/}
        {/*5. Augment access control with anomaly detection*/}
        {/*</Text>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Conclusion*/}
        {/*</Heading>*/}
        {/*<List>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Centralize authentication and user management.*/}
        {/*</ListItem>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Exchange long living credentials (username + password) for temporary credentials (token or assertion)*/}
        {/*with limited scope.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Consider combining pass-by-value and pass-by-reference tokens.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Consider federated protocols (e.g. OAuth2, OpenID Connect) for 3rd party access.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Use the browser as a trusted intermediary for authentication.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Model your environment with zero trust in mind.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Don't reinvent the wheel, use open standards & open source.*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Open Standards*/}
        {/*</Heading>*/}
        {/*<ListItem>*/}
        {/*<List textColor="tertiary"><strong>SAML:</strong> A Federated Identity System built on top of XML +*/}
        {/*SOAP</List>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>OAuth2:</strong> A Federated Authorization System for accessing*/}
        {/*resources on behalf of a user</List>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>OpenID Connect:</strong> Built on top of OAuth2, widely adopted SAML*/}
        {/*alternative in the consumer space</List>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<List textColor="tertiary"><strong>BeyondCorp:</strong> Zero Trust security framework that works without VPNs</List>*/}
        {/*</Appear>*/}
        {/*</ListItem>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"*/}
        {/*notes={(*/}
        {/*<div>*/}
        {/*<p>*/}
        {/*Ok, so let's look at some open source software next.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*The technology I'll present are my works, the company I founded is maintaining them, doing marketing,*/}
        {/*and so on*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}*/}
        {/*>*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Open Source*/}
        {/*</Heading>*/}
        {/*<Heading size={2} caps fit textColor="primary">*/}
        {/*Software*/}
        {/*</Heading>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"*/}
        {/*notes={(*/}
        {/*<div>*/}
        {/*<p>*/}
        {/*The first software, called ORY Hydra, is a cloud native OAuth2 and OpenID Connect provider*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*It connects to any existing identity provider and issues short living credentials*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}*/}
        {/*>*/}
        {/*<Heading size={2} caps textColor="tertiary">*/}
        {/*ORY Hydra*/}
        {/*</Heading>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.product.hydra.replace('/', '')} margin="40px auto 40px" />*/}
        {/*<Text textColor="primary">*/}
        {/*Cloud Native OAuth 2.0 and OpenID Connect Provider*/}
        {/*</Text>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*}} src={images.github.hydra.replace('/', '')} margin="40px auto 40px" />*/}
        {/*<Heading size={2} textColor="tertiary">*/}
        {/*github.com/ory/hydra*/}
        {/*</Heading>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"*/}
        {/*notes={(*/}
        {/*<div>*/}
        {/*<p>*/}
        {/*ORY Oathkeeper is a Identity and Access Proxy modeled after the Google BeyondCorp Whitepaper*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*It converts credentials (e.g. TLS Client Certification) to JSON Web Tokens, more specifically so-called*/}
        {/*ID Tokens which is a standard*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*It's also able to apply RBAC, ACL and more complex Access Control Policies*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*It also uses machine learning for outlier detection*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*Not everything is done yet, for example TLS client certification and outlier detection are still in*/}
        {/*development*/}
        {/*</p>*/}
        {/*<p>but you can grap the preview on github</p>*/}
        {/*</div>*/}
        {/*)}*/}
        {/*>*/}
        {/*<Heading size={2} caps textColor="tertiary">*/}
        {/*ORY Oathkeeper*/}
        {/*</Heading>*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*width: '70%'*/}
        {/*}} src={images.product.oathkeeper.replace('/', '')} margin="40px auto 40px" />*/}
        {/*<Text textColor="primary">*/}
        {/*Cloud Native Identity & Access Proxy*/}
        {/*</Text>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Image style={{*/}
        {/*backgroundColor: 'white',*/}
        {/*borderRadius: '16px',*/}
        {/*}} src={images.github.oathkeeper.replace('/', '')} margin="40px auto 40px" />*/}
        {/*<Heading size={2} textColor="tertiary">*/}
        {/*github.com/ory/oathkeeper*/}
        {/*</Heading>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary"*/}
        {/*notes={(*/}
        {/*<div>*/}
        {/*<p>*/}
        {/*We're almost done - if you have questions regarding the technology or might have a project where*/}
        {/*something*/}
        {/*what I talked about may fit in, don't hesitate to contact us at hi@ory.sh (sh like bash)*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*)}>*/}
        {/*<Heading size={1} textColor="tertiary">*/}
        {/*hi@ory.sh*/}
        {/*</Heading>*/}
        {/*</Slide>*/}

        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading caps size={1} textColor="tertiary">*/}
        {/*Q & A*/}
        {/*</Heading>*/}
        {/*</Slide>*/}


        {/*<Slide transition={['slide']} bgDarken={0.75} bgColor="secondary">*/}
        {/*<Heading size={1} textColor="primary">*/}
        {/*SSO*/}
        {/*</Heading>*/}
        {/*<List>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Leverage the browser as trusted gateway for exchanging credentials*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Minimize components that can read user credentials*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<ListItem textColor="tertiary">*/}
        {/*Centralize authentication to reduce overhead + risk*/}
        {/*</ListItem>*/}
        {/*</Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}


        {/*<Slide*/}
        {/*onActive={slideIndex => {*/}
        {/*console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console*/}
        {/*}}*/}
        {/*id="wait-what"*/}
        {/*goTo={4}*/}
        {/*transition={[*/}
        {/*'fade',*/}
        {/*(transitioning, forward) => {*/}
        {/*const angle = forward ? -180 : 180;*/}
        {/*return {*/}
        {/*transform: `*/}
        {/*translate3d(0%, ${transitioning ? 100 : 0}%, 0)*/}
        {/*rotate(${transitioning ? angle : 0}deg)*/}
        {/*`,*/}
        {/*backgroundColor: transitioning ? '#26afff' : '#000'*/}
        {/*};*/}
        {/*}*/}
        {/*]}*/}
        {/*bgColor="black"*/}
        {/*notes="You can even put notes on your slide. How awesome is that?"*/}
        {/*>*/}
        {/*<Image src={images.kat.replace('/', '')} margin="0px auto 40px" />*/}
        {/*<Heading size={2} caps fit textColor="primary" textFont="primary">*/}
        {/*Wait what?*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<Slide*/}
        {/*transitionIn={['zoom', 'fade']}*/}
        {/*transitionOut={['slide', 'fade']}*/}
        {/*bgColor="primary"*/}
        {/*notes="<ul><li>talk about that</li><li>and that</li></ul>"*/}
        {/*>*/}
        {/*<CodePane*/}
        {/*lang="jsx"*/}
        {/*source={require('raw-loader!../assets/deck.example')}*/}
        {/*margin="20px auto"*/}
        {/*overflow="overflow"*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide goTo={3}>*/}
        {/*<ComponentPlayground*/}
        {/*theme="dark"*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>*/}
        {/*<Appear fid="1">*/}
        {/*<Heading size={1} caps fit textColor="primary">*/}
        {/*Full Width*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear fid="2">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Adjustable Darkness*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear fid="3">*/}
        {/*<Heading size={1} caps fit textColor="primary">*/}
        {/*Background Imagery*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*</Slide>*/}
        {/*<Slide>*/}
        {/*<Heading size={2} textColor="secondary" margin="0.25em">*/}
        {/*Mix it up!*/}
        {/*</Heading>*/}
        {/*<Heading size={6} textColor="tertiary">*/}
        {/*You can even jump to different slides with a standard button or custom component!*/}
        {/*</Heading>*/}
        {/*<GoToAction*/}
        {/*margin="1em"*/}
        {/*slide={8}*/}
        {/*>*/}
        {/*Jump to Slide 8*/}
        {/*</GoToAction>*/}
        {/*<GoToAction*/}
        {/*render={goToSlide => (*/}
        {/*<select*/}
        {/*defaultValue=""*/}
        {/*style={{*/}
        {/*background: '#000',*/}
        {/*color: '#fff',*/}
        {/*fontFamily: theme.print.fonts.primary,*/}
        {/*fontSize: '1.1em'*/}
        {/*}}*/}
        {/*onChange={({ target }) => goToSlide(target.value)}*/}
        {/*>*/}
        {/*<option value="" disabled>Custom Slide Picker</option>*/}
        {/*<option value="wait-what">Wait What!? Slide</option>*/}
        {/*<option value={3}>Slide 3</option>*/}
        {/*</select>*/}
        {/*)}*/}
        {/*/>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgDarken={0.75} getAppearStep={this.updateSteps}>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="tertiary">*/}
        {/*Can*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="secondary">*/}
        {/*Count*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Appear>*/}
        {/*<Heading size={1} caps textColor="tertiary">*/}
        {/*Steps*/}
        {/*</Heading>*/}
        {/*</Appear>*/}
        {/*<Heading size={1} caps fit textColor="secondary">*/}
        {/*Steps: {this.state.steps}*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['zoom', 'fade']} bgColor="primary">*/}
        {/*<Heading caps fit>Flexible Layouts</Heading>*/}
        {/*<Layout>*/}
        {/*<Fill>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Left*/}
        {/*</Heading>*/}
        {/*</Fill>*/}
        {/*<Fill>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Right*/}
        {/*</Heading>*/}
        {/*</Fill>*/}
        {/*</Layout>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgColor="black">*/}
        {/*<BlockQuote>*/}
        {/*<Quote>Wonderfully formatted quotes</Quote>*/}
        {/*<Cite>Ken Wheeler</Cite>*/}
        {/*</BlockQuote>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['spin', 'zoom']} bgColor="tertiary" controlColor="primary" progressColor="primary">*/}
        {/*<Heading caps fit size={1} textColor="primary">*/}
        {/*Inline Markdown*/}
        {/*</Heading>*/}
        {/*<Markdown>*/}
        {/*{`*/}
        {/*![Markdown Logo](${images.markdown.replace('/', '')})*/}

        {/*You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax*/}
        {/** Lists too!*/}
        {/** With ~~strikethrough~~ and _italic_*/}
        {/** And let's not forget **bold***/}
        {/** Add some \`inline code\` to your sldes!*/}
        {/*`}*/}
        {/*</Markdown>*/}
        {/*</Slide>*/}
        {/*{*/}
        {/*MarkdownSlides`*/}
        {/*#### Create Multiple Slides in Markdown*/}
        {/*All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.*/}
        {/*---*/}
        {/*Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:*/}
        {/** A Tagged Template Literal*/}
        {/** Imported Markdown from another file*/}
        {/*---*/}
        {/*Add some inline code to your markdown!*/}

        {/*\`\`\`js*/}
        {/*const myCode = (is, great) => 'for' + 'sharing';*/}
        {/*\`\`\`*/}
        {/*`*/}
        {/*}*/}
        {/*<Slide transition={['slide', 'spin']} bgColor="primary">*/}
        {/*<Heading caps fit size={1} textColor="tertiary">*/}
        {/*Smooth*/}
        {/*</Heading>*/}
        {/*<Heading caps fit size={1} textColor="secondary">*/}
        {/*Combinable Transitions*/}
        {/*</Heading>*/}
        {/*</Slide>*/}
        {/*<SlideSet>*/}
        {/*<Slide transition={['fade']} bgColor="secondary" textColor="primary">*/}
        {/*<List>*/}
        {/*<Appear><ListItem>Inline style based theme system</ListItem></Appear>*/}
        {/*<Appear><ListItem>Autofit text</ListItem></Appear>*/}
        {/*<Appear><ListItem>Flexbox layout system</ListItem></Appear>*/}
        {/*<Appear><ListItem>PDF export</ListItem></Appear>*/}
        {/*<Appear><ListItem>And...</ListItem></Appear>*/}
        {/*</List>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['slide']} bgColor="primary">*/}
        {/*<Heading size={1} caps fit textColor="tertiary">*/}
        {/*Your presentations are interactive*/}
        {/*</Heading>*/}
        {/*<Interactive />*/}
        {/*</Slide>*/}
        {/*</SlideSet>*/}
        {/*<Slide transition={['slide']} bgColor="primary"*/}
        {/*notes="Hard to find cities without any pizza"*/}
        {/*>*/}
        {/*<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>*/}
        {/*Pizza Toppings*/}
        {/*</Heading>*/}
        {/*<Layout>*/}
        {/*<Table>*/}
        {/*<TableHeader>*/}
        {/*<TableRow>*/}
        {/*<TableHeaderItem />*/}
        {/*<TableHeaderItem>2011</TableHeaderItem>*/}
        {/*<TableHeaderItem>2013</TableHeaderItem>*/}
        {/*<TableHeaderItem>2015</TableHeaderItem>*/}
        {/*</TableRow>*/}
        {/*</TableHeader>*/}
        {/*<TableBody>*/}
        {/*<TableRow>*/}
        {/*<TableItem>None</TableItem>*/}
        {/*<TableItem>61.8%</TableItem>*/}
        {/*<TableItem>39.6%</TableItem>*/}
        {/*<TableItem>35.0%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Pineapple</TableItem>*/}
        {/*<TableItem>28.3%</TableItem>*/}
        {/*<TableItem>54.5%</TableItem>*/}
        {/*<TableItem>61.5%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Pepperoni</TableItem>*/}
        {/*<TableItem />*/}
        {/*<TableItem>50.2%</TableItem>*/}
        {/*<TableItem>77.2%</TableItem>*/}
        {/*</TableRow>*/}
        {/*<TableRow>*/}
        {/*<TableItem>Olives</TableItem>*/}
        {/*<TableItem />*/}
        {/*<TableItem>24.9%</TableItem>*/}
        {/*<TableItem>55.9%</TableItem>*/}
        {/*</TableRow>*/}
        {/*</TableBody>*/}
        {/*</Table>*/}
        {/*</Layout>*/}
        {/*</Slide>*/}
        {/*<Slide transition={['spin', 'slide']} bgColor="tertiary">*/}
        {/*<Heading size={1} caps fit lineHeight={1.5} textColor="primary">*/}
        {/*Made with love in Seattle by*/}
        {/*</Heading>*/}
        {/*<Link href="http://www.formidable.com"><Image width="100%" src={images.logo} /></Link>*/}
        {/*</Slide>*/}
      </Deck>
    );
  }
}
