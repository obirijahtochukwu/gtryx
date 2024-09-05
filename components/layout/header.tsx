"use client";
import React, { useState } from "react";
import { Icons } from "../shared/icons";
import dropdown from "../shared/dropdown";
import LanguageSetting from "../shared/language-setting";
import UserDropdown from "../shared/user-dropdown";
import Sidebar from "./sidebar";

export default function Header({ children }: { children: JSX.Element }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <nav className=" sticky top-0 left-0 flex items-center gap-4 p-6 pb-0 bg-white">
        <div className=" pb-4">
          <Icons.bar
            onClick={() => setIsOpen(!isOpen)}
            className=" w-6 h-6 cursor-pointer"
          />
        </div>
        <LanguageSetting />
        <UserDropdown />
      </nav>
      <div className=" flex">
        {" "}
        <div className="">
          <Sidebar isOpen={isOpen} />{" "}
        </div>
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam hic
          architecto quos. Autem, laborum? Ea sapiente repellat amet alias
          eligendi quidem ipsa rem suscipit, illo doloremque iure quod tempora
          earum id, non ex! Quibusdam laboriosam veritatis voluptatibus ab
          reprehenderit ea inventore! Consequatur voluptatum tempore temporibus
          culpa officia dolores vel rerum fugit? Magnam officiis voluptatum
          dignissimos sunt suscipit nam quos vero. Natus possimus tempora fugit
          corporis saepe quidem exercitationem vel animi. Alias sapiente
          excepturi quasi voluptatum ad at harum tempora officiis laudantium
          officia, eum quos autem dolor, inventore repellat quidem impedit, est
          iusto? Atque corrupti totam labore ea doloribus laudantium, harum fuga
          eos? Necessitatibus sed iusto suscipit nihil placeat quaerat at
          doloribus laudantium rem dolor hic ipsam ab alias aut cum natus
          distinctio vero quisquam molestiae architecto, consequatur incidunt?
          Obcaecati quam numquam eligendi ipsum, impedit ex est cum. Natus, odio
          rerum libero totam sunt laudantium blanditiis. Eveniet quidem quia
          quas fugit. Laboriosam fugit numquam harum quas temporibus aspernatur
          ipsam doloremque cumque molestias iure dolores non aut repudiandae quo
          asperiores ex, quibusdam quasi optio reiciendis? Hic, soluta
          necessitatibus! Explicabo laborum molestias amet veritatis a nesciunt
          ab, nostrum voluptatem at mollitia sequi quis tenetur adipisci labore
          laudantium eveniet quo accusamus magni soluta dolor assumenda quidem!
          Ipsum voluptatum minima deserunt ut earum numquam est cum, ea
          obcaecati in odit error dolore illum rerum a autem quidem delectus
          perspiciatis, magnam dolorem! Iusto eaque incidunt provident facilis
          aut repellat amet, exercitationem alias veritatis omnis illo voluptate
          numquam dolore, facere dolor culpa doloribus voluptatum. Ab atque
          reiciendis impedit magni repellendus rem nihil eum in accusamus modi
          iusto, ad distinctio eligendi doloribus nesciunt non illum explicabo
          perspiciatis excepturi? Quae beatae voluptates tenetur iure, sit
          voluptatem? Aliquid temporibus perferendis error eius amet possimus!
          Omnis aut placeat perferendis dolore dolorem reiciendis magnam ea
          soluta illum, quidem velit! Autem labore aspernatur rem corrupti nisi
          facilis sed. Dolore facere laborum soluta labore, voluptatibus quos,
          laudantium excepturi nobis similique nulla nemo repudiandae, a
          tempora. Porro tenetur a pariatur alias commodi quidem accusantium,
          rerum dolorum sapiente. Vitae dolores possimus unde error optio,
          minima repellendus accusamus labore amet, vel quaerat quam! Accusamus
          optio nobis, eos in, at quod cum, doloremque blanditiis nostrum
          dolorem cumque expedita! Accusantium provident quaerat magni suscipit
          perspiciatis. Vitae hic reprehenderit deleniti quos quidem,
          perspiciatis, ipsum vero nobis id dolorum, nesciunt eius dignissimos
          quam dolor sint adipisci odio accusamus autem aut soluta voluptate
          fuga asperiores error rerum? Ipsam sint, ipsa obcaecati id quidem sit
          voluptatem accusantium unde mollitia perspiciatis, error ducimus nisi
          reprehenderit, explicabo ex. Necessitatibus dignissimos sed eligendi.
          Modi in tempore cumque earum non quis nesciunt sapiente iste dolores,
          molestias quae culpa fuga debitis cupiditate hic! Consequatur
          accusantium enim fugiat. Saepe aut harum possimus, inventore dolore
          ipsum voluptates iusto fugiat iure nam veritatis rem in repellendus
          quae tenetur et ullam dicta. Soluta iusto praesentium aliquid illo
          totam modi a consectetur quibusdam unde temporibus architecto rerum
          error voluptate veniam, sequi distinctio iure maiores, nesciunt
          similique nostrum repudiandae ipsam ad quaerat quidem. Exercitationem
          animi praesentium beatae iusto laboriosam numquam recusandae, minus
          explicabo quis facilis temporibus repellendus dicta non! Est vel
          similique provident optio quaerat dolor quae nihil! Nihil eveniet eum
          inventore vitae. Cumque in repudiandae magnam commodi modi odit ex
          fugiat. Explicabo cumque praesentium asperiores magnam tempore sunt
          cupiditate impedit? Sit, consequatur? Reiciendis autem illum ducimus
          laudantium, eveniet, recusandae consequatur architecto a error
          asperiores necessitatibus facere consectetur, sint aut voluptas nobis
          nisi voluptatum alias magni cupiditate inventore odio! Velit, commodi
          quo, consequuntur, aperiam reprehenderit est itaque saepe fuga fugit
          ipsam nisi. Odio, praesentium cupiditate, quas sint provident
          asperiores perferendis excepturi iste voluptate, repudiandae expedita.
          Aliquam aut libero, porro officiis aperiam laudantium hic quod,
          molestiae sunt consequuntur voluptate ipsa, maiores dolores iure minus
          labore necessitatibus in nemo atque ab! Illum ipsum totam ullam unde
          nulla sapiente qui in, beatae saepe odit eligendi magnam possimus
          reprehenderit hic. Quod ea enim amet animi obcaecati optio corrupti
          iste consequatur cumque eveniet odio aperiam ab fugiat sit sint
          distinctio fuga dolor labore libero cum, harum reprehenderit
          laboriosam. Quia sint amet quibusdam aut facere minima sit impedit
          aspernatur aliquam, ipsum cumque, ut eius dolorem. Corporis fugiat
          facilis ex dignissimos distinctio, optio quisquam quis veritatis?
          Earum qui molestiae veritatis quisquam aperiam quidem necessitatibus
          corrupti, laborum eum rem recusandae eveniet ad voluptates architecto
          quia in sapiente exercitationem tempora sunt, incidunt hic et iusto
          placeat! Sit culpa animi voluptate voluptas, nemo provident id debitis
          optio, obcaecati placeat eaque ad cupiditate aliquid deserunt quis!
          Asperiores exercitationem accusamus officiis blanditiis unde ipsum
          porro cupiditate, ut quae assumenda debitis non distinctio voluptas
          dolor voluptates in repudiandae nostrum alias aspernatur? Sequi iste,
          numquam, architecto, vitae enim eveniet sit dignissimos itaque
          assumenda ullam eius ipsa veniam accusamus porro earum error tempora
          pariatur voluptate facere laudantium odit suscipit. Esse laborum
          dignissimos, dolorem quia libero provident autem quam placeat
          assumenda fuga incidunt modi, quae dolorum recusandae magnam
          laboriosam sequi vero unde illo asperiores eaque aspernatur facere
          corporis illum? Sed voluptatibus aut, unde eaque, necessitatibus
          explicabo enim minus blanditiis repudiandae impedit corporis. Quisquam
          tenetur corrupti, quasi, sapiente quis facere temporibus illum soluta
          natus sit reiciendis, perferendis porro quibusdam earum? Laborum dolor
          ut, vitae illum iusto aliquid ex voluptas velit, fugit atque quaerat
          est? Ducimus iste est repellat maxime. Quos perspiciatis expedita unde
          ex vel libero mollitia nam molestias est ducimus quis, nemo iure
          architecto optio cumque itaque voluptatem sint quia iste, odio error
          corrupti, excepturi eaque accusamus. Enim laborum sit illo non, vel
          omnis hic voluptas et! Consequatur aliquam necessitatibus voluptates
          ipsa fugit quam quod fugiat tenetur natus laboriosam, eius,
          perferendis officia! Tempora saepe illo iusto mollitia aperiam enim
          consequatur ea incidunt, quod eveniet, eum aspernatur doloremque,
          voluptas natus voluptatibus sunt debitis est! Eos consectetur,
          consequatur aperiam culpa veniam voluptatum dolor adipisci nesciunt
          magnam accusamus earum porro alias, perspiciatis excepturi. A autem
          velit eum molestias in adipisci quam sapiente asperiores est rem, iste
          magnam, sit consequuntur debitis consectetur hic veniam, sint
          officiis! Dolorum rerum sequi doloribus saepe quisquam, pariatur
          libero ex nulla amet expedita delectus officiis et corporis dolore
          sint, tempore reiciendis, ea odit. Facere quis cum recusandae cumque
          molestias fuga, harum ullam impedit eos dolorum quos iure corrupti
          nulla asperiores voluptas provident aperiam ipsum sint modi libero
          quasi dolores, perferendis illo animi. Eum, veniam illum quod at fugit
          dolorem repellat molestiae veritatis obcaecati velit qui odio
          quibusdam iste voluptas maxime officia optio iure. Sunt ad fuga
          dolorum eveniet quisquam assumenda illum distinctio. Tempora provident
          ullam architecto neque velit cumque nisi obcaecati, illo perferendis.
          In nobis aspernatur reiciendis quam ab, eveniet delectus esse odio non
          quae soluta similique ea autem ratione, dolor fugiat, assumenda quod
          enim quos distinctio optio magni obcaecati nulla adipisci? Itaque modi
          provident magni quas harum dolorem. Optio minus repudiandae cum fugiat
          ad expedita maiores fuga quibusdam? Nostrum fuga minima consequatur
          veritatis ipsum non a autem veniam. Odit distinctio tenetur, qui ea
          unde aliquid veritatis, voluptate, vero natus sequi asperiores
          reiciendis. Pariatur odio facere perspiciatis aliquid! Voluptatum
          consequatur dicta reprehenderit quisquam? Ea aspernatur animi
          doloremque repudiandae expedita neque in amet quasi modi odit fugiat
          iure, itaque similique rerum maxime quisquam excepturi? Corrupti
          impedit, porro harum velit id deserunt beatae ducimus nobis neque
          culpa voluptatem quae quo, architecto voluptatibus. Consequuntur totam
          dolor, tenetur amet vitae nihil. Provident odio a quod atque nam,
          blanditiis, veniam deleniti, officia fuga tempore ipsam quo est
          expedita quos et non temporibus veritatis nobis laudantium iste autem
          odit cum nihil. Nemo reprehenderit, error ipsam ipsum deserunt eos ad
          distinctio odio ab, architecto eum! Vitae ad hic excepturi quod neque.
          Excepturi obcaecati maiores velit minus, eligendi nesciunt iure,
          dignissimos labore culpa nam quam. Officiis ea porro, dolorum itaque
          dolore provident molestiae praesentium asperiores voluptas soluta
          recusandae! Vel voluptas iure facilis aspernatur natus. Praesentium
          numquam illo cumque, vero consequatur modi exercitationem excepturi
          cupiditate, recusandae aliquam minus est, fugit similique. Accusamus
          quibusdam hic minus similique quae dignissimos ipsam magni reiciendis
          temporibus magnam sunt, natus mollitia cumque modi quam ab, corporis
          quis! Accusantium veniam delectus illo eos temporibus! Labore natus,
          consectetur vitae maxime quam itaque tempora quaerat laborum quae
          magnam quis? Quia nemo incidunt animi expedita. Qui perferendis
          provident perspiciatis non officiis veniam fugit, necessitatibus alias
          quidem fugiat maiores sapiente temporibus architecto cumque amet. Amet
          at velit totam exercitationem ratione. Molestias nesciunt ullam
          temporibus fuga voluptatum consequatur fugit recusandae eaque nemo
          quos quo quod dolor maxime esse mollitia perferendis nulla ab eum
          sapiente, ea ad cum? Repellat vero perspiciatis doloribus porro optio
          tenetur sunt asperiores eveniet corrupti, architecto perferendis,
          minus voluptatum deserunt et ut unde aperiam adipisci veniam.
          Temporibus, nisi voluptates illum aspernatur enim accusantium sed
          expedita quod excepturi consequatur eveniet exercitationem quidem
          animi rem similique sit officia cum quae molestias non fugit saepe
          facilis? Dolorem dignissimos perferendis tempore, officiis nihil modi
          deserunt nam eos sint temporibus. Voluptatum, voluptate vel fuga, quos
          ut suscipit asperiores iusto distinctio consequatur iure, unde rem
          itaque. Earum, incidunt placeat quae, enim obcaecati, dolores et error
          corrupti odit voluptatum tenetur repellendus amet alias. Eum at
          excepturi nostrum ab enim alias placeat nemo aperiam est neque
          numquam, perspiciatis repellat voluptates id, quam aliquid error unde!
          Debitis animi dolorum consequuntur, hic veritatis, iusto, dicta fugit
          voluptas minima dignissimos consequatur corporis atque! Provident,
          accusantium nemo deleniti ipsam totam sed magni nostrum. Amet, at sunt
          deleniti consequuntur architecto, explicabo voluptas sapiente
          dignissimos repellendus laborum magni tenetur nulla? Earum, labore
          reprehenderit obcaecati nostrum nulla molestiae distinctio porro eaque
          quia dolor consequuntur! Velit quaerat, cumque earum repellat placeat
          quos adipisci commodi doloribus esse asperiores neque vitae autem
          nobis dolor repellendus quibusdam vel veniam ab illum odio. Odio ipsa,
          asperiores fugit sequi dolor ea? Rerum qui dolor eius sed alias
          recusandae, id voluptas consectetur nostrum delectus aperiam at
          voluptates voluptatem blanditiis minus a molestias numquam tempora
          praesentium voluptatum corrupti eaque ut facere. Aliquam quibusdam
          voluptatum similique accusantium sint eum, aspernatur a pariatur id
          accusamus ipsum ratione distinctio ipsa aut incidunt fuga laudantium
          porro dolorum, ea quis illo repudiandae odit tempore aperiam!
          Similique eaque, saepe labore, quisquam molestiae consequuntur earum
          cumque minima autem est architecto molestias. Dolorum soluta tenetur
          omnis quae, quaerat molestias obcaecati nostrum ea animi illo
          consequuntur quidem veniam optio id rem est. Sunt mollitia quis,
          ipsam, quam illo debitis voluptatum voluptate voluptates aperiam, rem
          perferendis dolore! Voluptatibus ullam nobis atque, voluptas
          repudiandae enim culpa vel. Reiciendis nam quod accusantium eligendi,
          ullam sed soluta porro ratione quaerat ipsum deleniti recusandae illum
          quam similique voluptatum! Ipsum dolore adipisci amet sapiente magnam
          beatae, deserunt quod, aliquam reprehenderit aliquid sint aspernatur
          porro suscipit quos a! Enim, quibusdam. Libero error velit dolore
          doloribus exercitationem pariatur? Molestiae quas possimus non rerum
          laudantium ex, nostrum eligendi reprehenderit autem, ipsam inventore
          debitis aliquam optio vitae. Natus eum saepe sequi possimus
          repudiandae omnis incidunt enim iusto, molestiae modi pariatur fuga
          explicabo quasi facere in rem repellendus earum quidem ipsa impedit
          assumenda alias debitis ex illo? Earum animi neque, aperiam voluptatem
          suscipit quas? Nemo corrupti aliquid, aut culpa doloremque dicta
          eveniet nisi quod ratione inventore exercitationem aperiam vitae rem,
          rerum ut eligendi dolores facilis nam magnam, nesciunt molestias
          perspiciatis eum ullam omnis. Officiis neque voluptates nulla
          consectetur nam molestiae? Minima suscipit velit molestiae nam hic
          porro, facilis cum saepe dolor nulla necessitatibus. Sequi velit amet
          totam quos quidem porro deserunt ullam modi consequuntur
          exercitationem possimus, tempora inventore sit laborum quae cumque
          molestiae perspiciatis tenetur? Voluptatum aut consequuntur at cumque
          iure itaque commodi quod nemo nostrum veritatis dolorem obcaecati
          dolores, expedita minima dolore quam repellendus nulla non nihil
          sapiente? Velit hic esse quibusdam rerum iste nam? Repellat labore
          minus corrupti aliquam, nisi rem facere veniam consectetur a quam
          nesciunt corporis ut voluptas numquam quis fugiat, aspernatur dolorem
          maiores, vitae ad! Debitis aspernatur dolores necessitatibus dolorum,
          nesciunt eligendi ipsum velit hic nihil a sunt aliquam expedita
          nostrum, officia perspiciatis iste asperiores, temporibus rem aperiam
          tempora quod! In hic, asperiores molestias quis sed velit accusantium!
          Facere repellat molestias eius inventore exercitationem voluptas
          provident eum quaerat incidunt quibusdam. Voluptate quam, enim,
          voluptatum voluptatibus harum sit odit ipsam esse, et repudiandae
          excepturi rerum! Repudiandae possimus laboriosam nihil ut ipsum
          eligendi omnis adipisci quod impedit fuga? Quasi quae soluta ea nam
          repudiandae. Neque maxime minus dignissimos perspiciatis inventore
          deleniti quo, laborum nemo eveniet voluptatibus!
        </div>{" "}
        {children}
      </div>
    </>
  );
}
