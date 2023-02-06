import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div>
      <Image src='' alt='' /> {/** project logo */}
      <div>
        <p>project name</p>
        <p>project description</p>

        <div>
          <p>saas</p>
          <p>requires payment</p>
          <div>
            <Image src='' alt='' />
            25+
          </div>
        </div>

        <div>
          <Image src='' alt='' />
          25
        </div>
      </div>
    </div>
  );
};

const MainPreview = () => {
  <section>
    <div>
      <p>Latest Projects</p>
      <div>
        <Image src='' alt='' /> {/** FILTER ICON */}
        <p>Filter</p>
      </div>
    </div>

    <div>
      <p>Coming Soon</p>
    </div>
  </section>;
};

export default MainPreview;
