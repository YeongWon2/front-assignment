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
    </main>
  );
}

export default IndexPage;
