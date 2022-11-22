import * as React from "react";

import Layout from "../components/Layout";

function missingPage() {
  return (
		<Layout>
    <section>
      <div class="p-y-24 bg-gray-100 dark-bg-gray-800 radius-md m-b-6 w-100 m-b-8 m-x-auto">
        <div class="container container-md gap-2">
					<h2 class="m-b-4">🥺</h2>
          <h2 class="m-b-4">Sorry, we couldn't find this page</h2>
          <p class="subtitle m-b-8">
            Don't worry. Maybe it's still out there. Let's back home 👇.
          </p>
          <a
            href="/"
            class="btn  btn-lg shadow-lg "
            aria-label="Back to homepage"
            role="button"
          >
            {" "}
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  </Layout>
	)
}
export default missingPage;
