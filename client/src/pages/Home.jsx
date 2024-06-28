import "../styles/Home.css";
import peinture from "../assets/peinture.png";


function Home() {
  return (
    <main className="home">
      <section className="section1">
        <div className="logo1">
          <img src={peinture} className="logo_pint" alt="peinture" />
        </div>
        <article>
          <p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            sapiente quaerat, soluta delectus placeat qui eos. Nobis sequi quod
            itaque a amet. Fuga aut soluta magnam reiciendis, exercitationem,
            sapiente consequuntur nam beatae excepturi et ipsam id culpa amet
            enim eligendi cum ab officia alias odit, placeat quas ducimus
            adipisci dolor saepe? Aliquid possimus qui tempore sint, id
            reiciendis consequuntur a ut molestiae, eos animi perferendis odio,
            veritatis suscipit repellat.
          </p>

          <p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            sapiente quaerat, soluta delectus placeat qui eos. Nobis sequi quod
            itaque a amet. Fuga aut soluta magnam reiciendis, exercitationem,
            sapiente consequuntur nam beatae excepturi et ipsam id culpa amet
            enim eligendi cum ab officia alias odit, placeat quas ducimus
            adipisci dolor saepe? Aliquid possimus qui tempore sint, id
            reiciendis consequuntur a ut molestiae, eos animi perferendis odio,
            veritatis suscipit repellat.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
