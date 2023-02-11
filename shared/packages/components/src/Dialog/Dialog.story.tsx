import { Typography } from '@lead/shared/packages/mui';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import Dialog, { Dialog as BaseComponent } from './Dialog';
import image from './533b24a6c46ad87643177f70a04cc553.jpg';
import { isDocs } from '@lead/storybook-story';
// import mdx from './Dialog.mdx';

export default {
  title: 'Components/Dialog',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },

  component: BaseComponent,
};

function handleChange<T>(setState: Dispatch<SetStateAction<T>>, nextState: T) {
  return () => {
    setState(nextState);
  };
}

export const BasicUsage = function BasicUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          This is dialog without title. Make sure to import this component from
          @lead/shared/packages/components
        </Typography>
      </Dialog>
    </>
  );
};

export const ExemplaryUsage = function ExemplaryUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        open={isOpen}
        header="This is heading that is a bit longer"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          This is basic dialog content that should also have at least one long
          sentence.
        </Typography>
      </Dialog>
    </>
  );
};

export const BackButtonExample = function BackButtonExample() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        showBackButton
        open={isOpen}
        header="This is heading that is a bit longer"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          This is basic dialog content that should also have at least one long
          sentence.
        </Typography>
      </Dialog>
    </>
  );
};

export const WithScrollbar = function WithScrollbar() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        open={isOpen}
        header="A short story about Dialog that have enough content so scroll will appear"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography component="div">
          <p>
            <b>Dialog</b> component has limited height so it will never be
            higher than the screen. For that reason, content has an automatic
            scroll that will appear if needed. In case you are creating a{' '}
            <i>custom header</i> and not using one implemented in the{' '}
            <b>Dialog</b> component, the header will also be part of the
            scrollable area. In case you are using <b>DialogBase</b> you have to
            add styles to your content so it will be scrollable. How to do that
            you can check under the <b>Scoped Css Baseline</b>.
          </p>
          <p>
            In case the{' '}
            <b>
              <i>size=&quot;small&quot;</i>
            </b>{' '}
            is used then all but top padding is set to 0 and padding should be
            handled on the level of children elements. <b>Feedback dialog</b> is
            not affected with{' '}
            <b>
              <i>size=&quot;small&quot;</i>
            </b>
            .
          </p>
          <p>
            Hope this little introduction will help you in the usage of this
            component.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            neque felis, consectetur nec elementum quis, euismod ut nunc. Proin
            sed justo dignissim, ultricies arcu sit amet, porttitor odio. Mauris
            porta, nibh ut posuere tempor, odio magna tempor turpis, ac
            condimentum lectus justo eu diam. Proin placerat felis cursus quam
            mattis commodo. Morbi vel commodo dolor, et consectetur erat. Sed
            porta vehicula tortor pharetra dictum. Maecenas consectetur turpis
            nec sagittis cursus. Nullam lacus diam, faucibus et lorem egestas,
            efficitur dignissim velit. Sed scelerisque libero et justo bibendum,
            lacinia efficitur ex volutpat. Phasellus quis suscipit elit. Fusce
            in turpis lobortis, convallis ante eu, imperdiet eros. Vivamus
            congue risus sed tristique sagittis. Nam ut bibendum velit. Maecenas
            et tincidunt purus. Aenean malesuada turpis ac metus facilisis,
            vitae mattis neque aliquet. Phasellus rutrum aliquam mi quis mollis.
            Morbi porta nulla sed eros suscipit, sed ornare nulla dignissim.
            Donec sit amet justo non purus aliquet condimentum ut euismod
            tortor.
          </p>
          <p>
            Maecenas ut justo porta sem cursus placerat vitae id sem. Vivamus
            nulla nibh, malesuada vel metus id, pretium varius nisi. Donec non
            mauris bibendum, iaculis mi vitae, sodales velit. Suspendisse magna
            justo, dictum ut libero ut, aliquam tincidunt metus. In ultrices
            neque vitae laoreet consectetur. Nullam purus dolor, posuere et
            finibus vitae, suscipit in ligula. Vivamus volutpat malesuada eros.
            Suspendisse volutpat mauris nec mattis porttitor. Vestibulum a lacus
            nulla. Aliquam id varius neque, non feugiat est. Aenean accumsan
            purus urna. Pellentesque blandit congue leo et maximus. Duis
            efficitur justo felis, et iaculis nunc euismod congue. Pellentesque
            convallis augue vitae purus iaculis auctor. Proin turpis diam,
            pellentesque at metus a, varius venenatis diam. Pellentesque et
            tortor at arcu aliquet convallis. Vivamus augue eros, auctor a
            ultrices ac, semper in ipsum. Ut neque urna, bibendum sit amet dolor
            in, aliquam ornare lectus.
          </p>
          <p>
            Proin aliquet lectus sed auctor dictum. Praesent consectetur arcu
            risus, eu elementum erat euismod vel. Aliquam porta tristique eros,
            sed cursus nisl accumsan non. In posuere dui nisi, et eleifend justo
            congue at. Nullam quis fringilla neque. Vivamus rutrum est
            tincidunt, dictum diam ultrices, vulputate nunc. Aliquam eu nisi nec
            ipsum porta rhoncus. Mauris id elit pulvinar, imperdiet tortor et,
            bibendum nibh. Praesent cursus massa et quam egestas, vel bibendum
            augue sodales. Sed volutpat aliquet ultrices. Curabitur condimentum
            tincidunt tincidunt. Etiam vehicula quam nec erat tincidunt, eu
            blandit urna viverra. Etiam sit amet risus iaculis, pretium sapien
            sed, condimentum sem. Duis iaculis, ipsum nec egestas pellentesque,
            nisl orci placerat odio, ac molestie elit quam ac nisl. Sed ac
            semper nisl.
          </p>
          <p>
            Suspendisse potenti. Proin dictum ultrices purus eu luctus. Aliquam
            erat volutpat. Phasellus blandit a lectus ac feugiat. Vestibulum
            lacus elit, dapibus nec mauris vel, tempus vestibulum mauris.
            Suspendisse eget ligula ante. Aliquam vitae mauris euismod,
            tristique sem eget, pharetra velit. Fusce non imperdiet est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            neque felis, consectetur nec elementum quis, euismod ut nunc. Proin
            sed justo dignissim, ultricies arcu sit amet, porttitor odio. Mauris
            porta, nibh ut posuere tempor, odio magna tempor turpis, ac
            condimentum lectus justo eu diam. Proin placerat felis cursus quam
            mattis commodo. Morbi vel commodo dolor, et consectetur erat. Sed
            porta vehicula tortor pharetra dictum. Maecenas consectetur turpis
            nec sagittis cursus. Nullam lacus diam, faucibus et lorem egestas,
            efficitur dignissim velit. Sed scelerisque libero et justo bibendum,
            lacinia efficitur ex volutpat. Phasellus quis suscipit elit. Fusce
            in turpis lobortis, convallis ante eu, imperdiet eros. Vivamus
            congue risus sed tristique sagittis. Nam ut bibendum velit. Maecenas
            et tincidunt purus. Aenean malesuada turpis ac metus facilisis,
            vitae mattis neque aliquet. Phasellus rutrum aliquam mi quis mollis.
            Morbi porta nulla sed eros suscipit, sed ornare nulla dignissim.
            Donec sit amet justo non purus aliquet condimentum ut euismod
            tortor.
          </p>
          <p>
            Maecenas ut justo porta sem cursus placerat vitae id sem. Vivamus
            nulla nibh, malesuada vel metus id, pretium varius nisi. Donec non
            mauris bibendum, iaculis mi vitae, sodales velit. Suspendisse magna
            justo, dictum ut libero ut, aliquam tincidunt metus. In ultrices
            neque vitae laoreet consectetur. Nullam purus dolor, posuere et
            finibus vitae, suscipit in ligula. Vivamus volutpat malesuada eros.
            Suspendisse volutpat mauris nec mattis porttitor. Vestibulum a lacus
            nulla. Aliquam id varius neque, non feugiat est. Aenean accumsan
            purus urna. Pellentesque blandit congue leo et maximus. Duis
            efficitur justo felis, et iaculis nunc euismod congue. Pellentesque
            convallis augue vitae purus iaculis auctor. Proin turpis diam,
            pellentesque at metus a, varius venenatis diam. Pellentesque et
            tortor at arcu aliquet convallis. Vivamus augue eros, auctor a
            ultrices ac, semper in ipsum. Ut neque urna, bibendum sit amet dolor
            in, aliquam ornare lectus.
          </p>
          <p>
            Proin aliquet lectus sed auctor dictum. Praesent consectetur arcu
            risus, eu elementum erat euismod vel. Aliquam porta tristique eros,
            sed cursus nisl accumsan non. In posuere dui nisi, et eleifend justo
            congue at. Nullam quis fringilla neque. Vivamus rutrum est
            tincidunt, dictum diam ultrices, vulputate nunc. Aliquam eu nisi nec
            ipsum porta rhoncus. Mauris id elit pulvinar, imperdiet tortor et,
            bibendum nibh. Praesent cursus massa et quam egestas, vel bibendum
            augue sodales. Sed volutpat aliquet ultrices. Curabitur condimentum
            tincidunt tincidunt. Etiam vehicula quam nec erat tincidunt, eu
            blandit urna viverra. Etiam sit amet risus iaculis, pretium sapien
            sed, condimentum sem. Duis iaculis, ipsum nec egestas pellentesque,
            nisl orci placerat odio, ac molestie elit quam ac nisl. Sed ac
            semper nisl.
          </p>
          <p>
            Suspendisse potenti. Proin dictum ultrices purus eu luctus. Aliquam
            erat volutpat. Phasellus blandit a lectus ac feugiat. Vestibulum
            lacus elit, dapibus nec mauris vel, tempus vestibulum mauris.
            Suspendisse eget ligula ante. Aliquam vitae mauris euismod,
            tristique sem eget, pharetra velit. Fusce non imperdiet est.
          </p>
        </Typography>
      </Dialog>
    </>
  );
};

export const Small = function Small() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        size="small"
        open={isOpen}
        header="This is heading of a dialog without outher padding"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          In case the{' '}
          <b>
            <i>size=&quot;small&quot;</i>
          </b>{' '}
          is used then all but top padding is set to 0 and padding should be
          handled on the level of children elements. <b>Feedback dialog</b> is
          not affected with{' '}
          <b>
            <i>size=&quot;small&quot;</i>
          </b>
          . The header in the <b>Dialog</b> component will have no side padding,
          so if a longer header is expected, a custom header element should be
          added.
        </Typography>
      </Dialog>
    </>
  );
};

export const SmallWithCustomHeader = function SmallWithCustomHeader() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <Dialog
        disableTransition
        showBackButton
        size="small"
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <img src={image} alt="" style={{ width: '100%' }} />
        <Typography variant="h4" align="center" sx={{ padding: '25px' }}>
          Custom header that have custom styles
        </Typography>
        <Typography component="div">
          <p style={{ padding: '5px 15px', background: '#e5e5e5' }}>
            In this example we creatred custom header with 25px padding. Because
            it is part of the content area, it scroll with rest of the content.
            Also we styled the first paragraph.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            neque felis, consectetur nec elementum quis, euismod ut nunc. Proin
            sed justo dignissim, ultricies arcu sit amet, porttitor odio. Mauris
            porta, nibh ut posuere tempor, odio magna tempor turpis, ac
            condimentum lectus justo eu diam. Proin placerat felis cursus quam
            mattis commodo. Morbi vel commodo dolor, et consectetur erat.
          </p>
          <p>
            Proin aliquet lectus sed auctor dictum. Praesent consectetur arcu
            risus, eu elementum erat euismod vel. Aliquam porta tristique eros,
            sed cursus nisl accumsan non. In posuere dui nisi, et eleifend justo
            congue at. Nullam quis fringilla neque. Vivamus rutrum est
            tincidunt, dictum diam ultrices, vulputate nunc. Aliquam eu nisi nec
            ipsum porta rhoncus. Mauris id elit pulvinar, imperdiet tortor et,
            bibendum nibh. Praesent cursus massa et quam egestas, vel bibendum
            augue sodales. Sed volutpat aliquet ultrices. Curabitur condimentum
            tincidunt tincidunt. Etiam vehicula quam nec erat tincidunt, eu
            blandit urna viverra. Etiam sit amet risus iaculis, pretium sapien
            sed, condimentum sem. Duis iaculis, ipsum nec egestas pellentesque,
            nisl orci placerat odio, ac molestie elit quam ac nisl. Sed ac
            semper nisl.
          </p>
          <p>
            Suspendisse potenti. Proin dictum ultrices purus eu luctus. Aliquam
            erat volutpat. Phasellus blandit a lectus ac feugiat. Vestibulum
            lacus elit, dapibus nec mauris vel, tempus vestibulum mauris.
            Suspendisse eget ligula ante. Aliquam vitae mauris euismod,
            tristique sem eget, pharetra velit. Fusce non imperdiet est.
          </p>
          <p>
            Proin aliquet lectus sed auctor dictum. Praesent consectetur arcu
            risus, eu elementum erat euismod vel. Aliquam porta tristique eros,
            sed cursus nisl accumsan non. In posuere dui nisi, et eleifend justo
            congue at. Nullam quis fringilla neque. Vivamus rutrum est
            tincidunt, dictum diam ultrices, vulputate nunc. Aliquam eu nisi nec
            ipsum porta rhoncus. Mauris id elit pulvinar, imperdiet tortor et,
            bibendum nibh. Praesent cursus massa et quam egestas, vel bibendum
            augue sodales. Sed volutpat aliquet ultrices. Curabitur condimentum
            tincidunt tincidunt. Etiam vehicula quam nec erat tincidunt, eu
            blandit urna viverra. Etiam sit amet risus iaculis, pretium sapien
            sed, condimentum sem. Duis iaculis, ipsum nec egestas pellentesque,
            nisl orci placerat odio, ac molestie elit quam ac nisl. Sed ac
            semper nisl.
          </p>
          <p>
            Proin aliquet lectus sed auctor dictum. Praesent consectetur arcu
            risus, eu elementum erat euismod vel. Aliquam porta tristique eros,
            sed cursus nisl accumsan non. In posuere dui nisi, et eleifend justo
            congue at. Nullam quis fringilla neque. Vivamus rutrum est
            tincidunt, dictum diam ultrices, vulputate nunc. Aliquam eu nisi nec
            ipsum porta rhoncus. Mauris id elit pulvinar, imperdiet tortor et,
            bibendum nibh. Praesent cursus massa et quam egestas, vel bibendum
            augue sodales. Sed volutpat aliquet ultrices. Curabitur condimentum
            tincidunt tincidunt. Etiam vehicula quam nec erat tincidunt, eu
            blandit urna viverra. Etiam sit amet risus iaculis, pretium sapien
            sed, condimentum sem. Duis iaculis, ipsum nec egestas pellentesque,
            nisl orci placerat odio, ac molestie elit quam ac nisl. Sed ac
            semper nisl.
          </p>
        </Typography>
      </Dialog>
    </>
  );
};
