import clsx from 'clsx';

import Divider from '@/modules/components/Divider';
import EmailInput from '@/modules/components/EmailInput';
import NewsLetterList from '@/modules/components/NewsLetterList';
import RandomBackgroundImage from '@/modules/components/RandomBackgroundImage';
import { MainTitle } from '@/modules/components/Text';
import UserCardList from '@/modules/components/UserCardList';
import { FONT_FAMILY } from '@/modules/styles/typography';

function IndexPage() {
  return (
    <main>
      <section className="pt-30 px-20">
        <MainTitle>
          Snap photos and share like
          <br />
          never before
        </MainTitle>
        <UserCardList className="mt-17.5" />
      </section>
      <section className="mt-27.5">
        <RandomBackgroundImage className="flex flex-col items-center justify-center px-20">
          <h3 className={clsx('text-background-title', FONT_FAMILY.MONTSERRAT)}>
            Sed ut perspiciatis unde omnis
          </h3>
          <p
            className={clsx(
              'mt-5.75 text-center text-background-description',
              FONT_FAMILY.MONTSERRAT
            )}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which
            <br />
            {`don't`} look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there {`isn't`} anything
            embarrassing hidden in the middle of text. All
            <br />
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary.
          </p>
          <Divider className="my-8" height={1} />
          <p className="text-background-sub-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
          <h5
            className={clsx(
              'mt-23.75 text-background-news-title',
              FONT_FAMILY.EXO2
            )}
          >
            Subscribe to our newsletter
          </h5>
          <EmailInput className="mt-5" />
        </RandomBackgroundImage>
      </section>
      <section className="mt-30 px-20 pb-20">
        <MainTitle>Duis tincidunt ut ligula vitae mollis.</MainTitle>
        <NewsLetterList className="mt-15" />
      </section>
    </main>
  );
}

export default IndexPage;
