import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
      <div className="py-2 bg-gray-100 rounded-lg flex gap-2">
        <button className='bg-red-500 text-white px-2 py-1 ml-2 rounded-lg'>Latest</button>
        <Marquee>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio
            voluptatem ab, eius tempore officia minima quod dolore cupiditate
            adipisci quam eligendi dignissimos et eaque quis delectus ut iure
            distinctio. Provident earum velit odit, nam quo dolorem facilis unde
            ullam, adipisci sit itaque et? Omnis nisi perspiciatis id cum saepe,
            dicta, facere consequuntur quis doloribus ut et nihil nesciunt totam
            ipsum optio, deserunt dolorem? Perferendis voluptatem sit ad aperiam
            officiis iste quam molestiae reiciendis! Quis, ratione quae? Cumque
            quasi explicabo quia earum consequuntur eveniet, dicta quaerat qui
            at dignissimos quam sit perferendis optio minus sunt laudantium
            corporis praesentium a voluptas id molestias iusto, aliquid commodi
            incidunt! Laudantium omnis nemo, non, voluptatem minima eius tempore
            corrupti dolores nostrum perferendis repellat facere exercitationem
            dignissimos modi! Quas consequuntur fugit dolorum. Illo rerum
            placeat, voluptatem quidem nesciunt blanditiis eos? Commodi illum
            cumque vitae tempora architecto nam excepturi eveniet laudantium
            reiciendis magni obcaecati, molestias rerum veritatis in sequi
            voluptate consequuntur eius. Laudantium reprehenderit neque natus
            quae, possimus dignissimos quaerat deleniti, nisi nihil eligendi
            corporis consequatur, et eveniet quos tempore harum. Qui nam et
            rerum laborum aliquam repellat quia incidunt quo praesentium
            excepturi fuga similique commodi iure fugiat consectetur accusamus,
            aspernatur illum hic corporis sunt at.
          </p>
        </Marquee>
      </div>
    );
};

export default BreakingNews;