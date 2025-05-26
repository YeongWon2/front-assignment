import RandomBackgroundImage from '@/modules/components/RandomBackgroundImage';
import { MainTitle } from '@/modules/components/Text';
import UserCardList from '@/modules/components/UserCardList';

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
        <RandomBackgroundImage />
      </section>
    </main>
  );
}

export default IndexPage;
