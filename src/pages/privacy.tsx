import { type NextPage } from "next";
import { api } from "../utils/api";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StaticBackground } from "../components/BackgroundStatic";
import { generateHTML } from "../core/contentUtils";
import { Scaffold } from "../components/Scaffold";

const Privacy: NextPage = () => {
  const content = api.content.getPage.useQuery({
    id: "63fe097343ca201d7f06e632",
  });

  const html = content.data
    ? generateHTML(JSON.parse(content.data?.content))
    : "";

  return (
    <Scaffold>
      <div
        id="previewPage"
        className="p-8 sm:p-20 md:p-40 text-normal font-light font-poppins text-black"
      >
        <p className=" mb-4 mt-2">
          <strong className="font-bold"> PRIVACY POLICY</strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Effective Date: </strong>
          December 9th, 2022
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Introduction and Scope</strong>
        </p>
        <p className=" mb-4 mt-2">
          Snowcrash, Inc. (“<strong className="font-bold">Snowcrash</strong>”, “<strong className="font-bold">we</strong>”, “    <strong className="font-bold">us</strong>” or “<strong className="font-bold">our</strong>”) respects the privacy of our
          visitors and users (referred to as “<strong className="font-bold">you</strong>” or “    <strong className="font-bold">your</strong>”). This privacy policy (and as amended from time to
          time as posted on our website at
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.snowcrash.com/privacy"
          >
            <u>www.snowcrash.com/privacy</u>
          </a>
          ) (“<strong className="font-bold">Privacy Policy</strong>”) describes the types of information we
          collect from you or that you may provide when you visit or use our
          scnowcrash.com website (“<strong className="font-bold">Website</strong>”) or use our NFT auction
          and transaction platform (“<strong className="font-bold">Services</strong>”), and our practices
          for collecting, using, maintaining, protecting, disclosing, retaining, and
          transferring that information. By “visitors” we mean visitors to our
          Website who are not yet customers, those who become customers, as well as
          those who do not become customers. By “customers” we mean persons who sign
          up to use our Services. This Privacy Policy applies to you as applicable to
          the category to which you belong. This Privacy Policy applies to the data
          collected by us, or those working on our behalf, through information you
          enter or from the data imported from authorized and approved sources. It
          does not apply to data collected through other websites, products, or
          services not approved by us.
        </p>
        <p className=" mb-4 mt-2">
          Our Privacy Policy describes:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              How and why we collect your Personal Information
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              How your Personal Information is used and protected
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              When and with whom we share your Personal Information
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              What choices you can make about how we collect, use, and share your
              Personal Information
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              How we may store, retain, and transfer your Personal Information
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Your rights (where applicable) to learn about the Personal
              Information we collect, and what you can request that we do with it
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Acknowledgement and Consent</strong>
        </p>
        <p className=" mb-4 mt-2">
          By visiting our Website or signing up to use or using our Services in any
          manner, you acknowledge that you accept the terms, practices and policies
          described in this Privacy Policy (and as updated from time to time), and
          you hereby consent that we may collect, use, and share your information as
          described herein. If you do not agree with our policies and practices, your
          choice is not to use our Website or our Services. Your use of the Website
          and our Services is at all times subject to our Terms of Service (available
          at
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.snowcrash.com/terms"
          >
            <u>www.snowcrash.com/terms</u>
          </a>
          and as updated from time to time (the “<strong className="font-bold">Terms</strong>”)), which is
          incorporated by reference herein. Any capitalized terms we use in this
          Privacy Policy without defining them have the definitions given to them in
          the Terms.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">What Information Does This Privacy Policy Cover?</strong>
        </p>
        <p className=" mb-4 mt-2">
          This Privacy Policy covers our treatment of personally identifiable
          information. “<strong className="font-bold">Personal Information</strong>” means any unencrypted
          or non-deidentified information that identifies, relates to, describes, is
          reasonably capable of being associated with, or could reasonably be linked
          with a particular person such as, but not limited to, your name, mailing
          address, email address, telephone number, etc. Please see additional
          information below on the particular information we collect.
        </p>
        <p className=" mb-4 mt-2">
          This Privacy Policy covers our treatment of personally identifiable
          information. Such information may include name, mailing address, email
          address, telephone number, and other information which identifies you as a
          specific individual (“<strong className="font-bold">Personal Information</strong>”). Please see
          additional information below on the information we collect. For this
          Privacy Policy the definition of “Personal Information” is the definition
          under the state, country, or other law applicable to the person whose data
          is collected; however, for California residents only, “Personal
          Information” shall have the definition as set forth in the California
          Consumer Privacy Act of 2018 (“<strong className="font-bold">CCPA</strong>”). Please see the
          section below entitled “Privacy Notice for California Residents” for more
          information.
        </p>
        <p className=" mb-4 mt-2">
          If you are a citizen or resident of the European Economic Area (“EEA“),
          United Kingdom, or Switzerland, the definition of personal information is
          defined under the General Data Protection Regulation (“GDPR”) and you have
          certain rights; therefore, please see the section below entitled “GDPR”.
        </p>
        <p className=" mb-4 mt-2">
          Personal Information does not include your Personal Information that has
          been deidentified, pseudonymized, anonymized, aggregated, and/or otherwise
          processed so as to be unidentifiable in such a way that the data can no
          longer be attributed to a specific individual (by reasonable means) without
          the use of additional information, and where such additional information is
          kept separate and under adequate security to prevent unauthorized
          re-identification of a specific individual such that one could not, using
          reasonable efforts, link such information back to a specific individual
          (collectively, all of the foregoing in this sentence being referred to as “    <strong className="font-bold">De-Identified Personal Information</strong>”).<em> </em>
        </p>
        <p className=" mb-4 mt-2">
          We may also collect Personal Information from you through means other than
          our Website. This may include offline collection, such as if you submit a
          paper application, make a payment by check, or call or visit our office. It
          may also include emails, text messages, or other electronic communications
          that you send to us separate from our Website or by way of our third party
          service providers. However, if we combine the Personal Information we
          collect from you outside of our Website with Personal Information that is
          collected through our Website or by another means as described above, the
          Privacy Policy will apply to the combined information, unless specifically
          disclosed otherwise.
        </p>
        <p className=" mb-4 mt-2">
          Other than as stated herein, this Privacy Policy does not apply to
          information collected by any third party (including our affiliates and
          subsidiaries), including through any application or content (including
          advertising) that may link to or be accessible from or on our Website. We
          are not responsible for the practices of sites linked to from the Services,
          and before interacting with any of these sites you are advised to review
          their rules and policies before providing them with any private
          information.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Individuals under the Age of 18</strong>
        </p>
        <p className=" mb-4 mt-2">
          We do not knowingly collect, solicit or maintain Personal Information from
          anyone under the age of 18 or knowingly allow such persons to register for
          our Services. If you are under 18, please do not send any Personal
          Information about yourself (such as your name, address, telephone number,
          or email address) to us. In the event that we learn that we have collected
          Personal Information from a child under age 18 without verification of
          parental consent, we will use commercially reasonable efforts to delete
          that information from our database. Please contact us if you have any
          concerns.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Changes to Our Privacy Policy</strong>
        </p>
        <p className=" mb-4 mt-2">
          We are constantly working to improve our Website and Services, and we may
          need to change this Privacy Policy from time to time as well. Our current
          Privacy Policy will always be on our Website and any updates will be
          effective upon posting. You are responsible for periodically checking our
          Website for updates. Under certain circumstances, we may also elect to
          notify registered users of changes or updates to this Privacy Policy by
          additional means, such as posting a notice on the front page of the Website
          or by sending you an email, but you should not rely on receiving such
          additional notice.
        </p>
        <p className=" mb-4 mt-2">
          Please note that if you have opted not to receive legal notice emails from
          us (or you haven’t provided us with your email address), those legal
          notices will still govern your use of the Services, and you are still
          responsible for reading and understanding them. If you use the Website,
          purchase products, or use our Services after any changes to the Privacy
          Policy have been posted, that means you agree to the new Privacy Policy,
          including all of the changes. Use of information we collect now is subject
          to the Privacy Policy in effect at the time such information is collected.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Personal Information We Collect </strong>
        </p>
        <p className=" mb-4 mt-2">
          We collect several categories of Personal Information from and about you as
          summarized in the following table:
        </p>
        <table>
          <tbody>
            <tr>
              <th>
                <p className=" mb-4 mt-2">
                  <strong className="font-bold">Category</strong>
                </p>
              </th>
              <th>
                <p className=" mb-4 mt-2">
                  <strong className="font-bold">Specific Items of Personal Information</strong>
                </p>
              </th>
            </tr>
            <tr>
              <td>
                <p className=" mb-4 mt-2">
                  Identifiers
                </p>
              </td>
              <td>
                <p className=" mb-4 mt-2">
                  first and last name, user name, email address
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className=" mb-4 mt-2">
                  Demographic
                </p>
              </td>
              <td>
                <p className=" mb-4 mt-2">
                  national origin, country of residence
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className=" mb-4 mt-2">
                  Commercial Information
                </p>
              </td>
              <td>
                <p className=" mb-4 mt-2">
                  products/services purchased on our website
                </p>
                <p className=" mb-4 mt-2">
                  cryptocurrency wallet address
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className=" mb-4 mt-2">
                  Internet or other electronic network activity
                </p>
              </td>
              <td>
                <p className=" mb-4 mt-2">
                  browsing, session, interaction, and search history related
                  to our Website, Internet Protocol (or IP) address,
                  protocol, and sequence information, cookies
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">How We Collect Personal Information and from What Sources</strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"><u>Information You Provide Us</u></strong>
          . The Personal Information we collect through our Website, or from our
          representatives, business partners, or service providers may be obtained as
          part of the following:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              Information that you provide by filling in webforms on our Website.
              This includes information provided when creating an online account,
              purchasing our Products or Services, subscribing to our
              e-newsletters or other communications, requesting information from
              us, submitting or posting material (where permitted) on our forums,
              or interacting with customer support or service, report a problem
              with our Website, Products, or Services, or otherwise communicating
              with us.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Records and copies of your correspondence (including email
              addresses), if you contact us
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Registering for an event
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Your responses to surveys that we or our service providers might
              ask you to complete for research purposes
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Your search queries on the Website
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              When communicating with customer service/support
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Through participation in loyalty/rewards programs
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Third party websites and mobile applications (e.g., websites that
              share information with us or advertising partners regarding online
              activities)
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              On mobile applications (parent, subsidiary and affiliate brands)
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Joint marketing partners
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Social media companies
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Other service providers
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Responding to employment opportunities
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            <u>
              Information We Collect Through Automatic Data Collection
              Technologies
            </u>
          </strong>
          <strong className="font-bold">.</strong>
          As you navigate through and interact with our Website, we may use automatic
          data collection technologies to collect certain information about your
          equipment, browsing actions and patterns, including:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              Details of your visits to our Website, including, but not limited
              to, traffic data, geolocation data, logs, and other communication
              data and the resources that you access and use on the Website.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Information about your computer, mobile device, and internet
              connection, including your IP address, operating system, browser
              type, clickstream patterns, the URL of the most recent website you
              visited before coming to our Website, the amount of time you spent
              on our Website, and the pages you viewed while on our Website.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Behavioral Tracking. We also may use these technologies to collect
              information about your online activities over time and across
              third-party websites or other online services, or associate
              Personal Information with other information collected in this
              manner.
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          The information we collect automatically is statistical data and may
          include Personal Information, and we may maintain it or associate it with
          Personal Information we collect in other ways or receive from third
          parties. It helps us to improve our Website and to deliver better and more
          personalized Products and Services, including, but not limited to, by
          enabling us to: estimate our audience/visitor size and usage patterns,
          store information about your preferences, allowing us to customize and
          improve our Website, speed up your searches, and/or, recognize you when you
          return to our Website.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"><u>Cookie Notice/Policy</u></strong>
        </p>
        <p className=" mb-4 mt-2">
          The technologies we use for this automatic data collection may include
          cookies, local storage cookies, web beacons, pixel tracking, GIF and/or IP
          address. Each of these is discussed below.
        </p>
        <p className=" mb-4 mt-2">
          <em>Cookies (or browser cookies)</em>
        </p>
        <p className=" mb-4 mt-2">
          A cookie is a small file placed on the hard drive of your computer or
          mobile device. It may contain certain data, including, but not limited to:
          the name of the server that has placed it there, an identifier in the form
          of a unique number, and, an expiration date (some cookies only). Cookies
          are managed by the web browser on your computer or mobile device (Internet
          Explorer, Firefox, Safari or Google Chrome).
        </p>
        <p className=" mb-4 mt-2">
          It is possible that you will come across third-party cookies on some pages
          of sites that are not under our control.
        </p>
        <p className=" mb-4 mt-2">
          We also use cookies to implement tracking technology on our Website. This
          allows us to display advertising that is tailored to you on our Website, to
          understand which parts of our content interest you the most, and which
          Service categories you request. This tracking uses De-Identified Personal
          Information data). We will not combine this data with your other Personal
          Information without your express permission. Some of our service providers
          are allowed to place cookies on our Website. Those companies may also
          provide you with the option of preventing the use of cookies in the future.
          For more information, contact the relevant third-party provider.
        </p>
        <p className=" mb-4 mt-2">
          At any time, you can prevent the use of cookies in the future. You may
          activate the appropriate setting in your browser to refuse to accept
          browser cookies. However, if you do, your experience on our Website may be
          affected; e.g., you may be unable to access certain parts of our Website.
          Unless you have adjusted your browser setting so that it will refuse
          cookies, our system will issue cookies when you direct your browser to our
          Website.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Information We Collect from Third Parties</strong>
        </p>
        <p className=" mb-4 mt-2">
          We may collect information that others provide about you when you use the
          Website, or obtain information from other sources and combine that with
          information we collect through the Website. If you link, connect, or login
          to your account with a third party social media service (e.g., Facebook,
          Google, Instagram, etc.), the third-party service may send us information
          such as your registration and profile information from that service. This
          information varies and is controlled by that service or as authorized by
          you via your privacy settings at that service.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Third-Party Use of Cookies and Other Tracking Technologies</strong>
        </p>
        <p className=" mb-4 mt-2">
          A cookie is a small file placed on the hard drive of your computer or
          mobile device. Some content or applications, including advertisements, on
          the Website are served by third parties, including advertisers, ad networks
          and servers, content providers and application providers. First-party or
          third-party cookies may be used alone or in conjunction with web beacons or
          other tracking technologies to collect information about you when you use
          our Website. A first-party cookie is a cookie set by the domain name that
          appears in the browser address bar. A third-party cookie is a cookie set by
          (and on) a domain name that is not the domain name that appears in the
          browser address bar. It might be set as part of a side resource load
          (image, JS, iframe, etc., from a different hostname) or an AJAX HTTP
          request to a third-party server. The information that first-party and
          third-party cookies collect may be associated with your Personal
          Information or they may collect information, including Personal
          Information, about your online activities over time and across different
          websites and other online services (i.e., tracking such activities). They
          may use this information to provide you with interest-based (behavioral)
          advertising or other targeted content.
        </p>
        <p className=" mb-4 mt-2">
          We do not control these third parties’ tracking technologies or how they
          may be used. If you have any questions about an advertisement or other
          targeted content, you should contact the responsible provider directly.
          More information on how to opt-out of third-party advertiser tracking
          mechanisms
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.networkadvertising.org/managing/opt_out.asp"
          >
            <u>here</u>
          </a>
          .
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"><u>Google Analytics</u></strong>
          . We use, and some of our third-party service providers may use,
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/analytics/learn/privacy.html"
          >
            <u>Google Analytics</u>
          </a>
          or other analytics service to help us understand the use of our Website and
          Services. Such services or service providers may place their own cookies in
          your browser. This Privacy Policy does not cover the use of third-party
          cookies.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Posting Content</strong>
        </p>
        <p className=" mb-4 mt-2">
          You also may submit information, such as comments, reviews, testimonials,
          etc., to be published or displayed (“<strong className="font-bold">posted</strong>”) on public
          areas of the Website, or transmitted to other users of the Website or third
          parties (collectively, “<strong className="font-bold">Content</strong>”). Your Content is posted
          and transmitted to others at your own risk. We cannot control the actions
          of other users of the Website with whom you may choose to share your
          Content. Therefore, we cannot and do not guarantee that your Content will
          not be viewed by unauthorized persons. By posting any Content or submitting
          Content for posting you agree to and do hereby grant us and our licensors,
          affiliates, partners, successors and assigns, a nonexclusive, perpetual,
          irrevocable, worldwide, sublicensable, transferrable, royalty-free right
          and license to use, store, display, publish, transmit, transfer,
          distribute, reproduce, rearrange, edit, redact, modify, aggregate,
          summarize, adapt, create derivative works of and publicly perform the
          Content that you post or otherwise submit to us for any purpose, in any
          form, medium, or technology now known or later developed (“    <strong className="font-bold">Right to Use</strong>”).
        </p>
        <p className=" mb-4 mt-2">
          The Right to Use you grant us above also extends to any Content that you
          have posted to our social media account pages, or on other websites, e.g.,
          Google. The term “<strong className="font-bold">Use</strong>” includes, but is not limited to,
          use, reproduce, modify, publish, list information regarding, edit, delete,
          translate, distribute, publicly display, publicly perform, and make
          derivative works of the content.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">How We Use Your Information</strong>
        </p>
        <p className=" mb-4 mt-2">
          We use information that we collect about you or that you provide to us,
          including any Personal Information, for one or more of the following
          purposes:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              To present our Website and its contents to you.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To provide you with information and respond to your questions on
              Products or Services that you request from us and information on
              new products and services, discounts, special promotions or
              upcoming events, and features or offers that we believe will be of
              interest to you.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To provide you with the Products, Services, or information that you
              have requested.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To process transaction payments, including, but not limited to,
              product and/or service fees, subscription fees, professional fees,
              membership dues, registration fees, and payments, refunds and
              reimbursements for any products or services that you choose to
              purchase from us (though we do not receive your credit or debit
              card number).
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To process discounts, offers, loyalty rewards.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To provide you with notices about your account, including
              expiration and renewal notices.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To notify you about information regarding or changes to our
              Website, our policies, terms, or any Products or Services we offer
              or provide, or regarding your account.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To process your account application and any changes to your account
              information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To process Personal Information or other information that you
              submit through to us.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To allow you to participate in interactive features on our Website.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To contact you about our own and third-parties’ products and
              services that may be of interest to you.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To provide access to restricted parts of our Website, e.g., areas
              accessible if you have a user account.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To enhance and improve our products and Services, for example, by
              performing internal research, analyzing user trends, or measuring
              demographics and interests.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              For internal purposes, such as Website and system administration or
              internal audits and reviews.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              For analyzing how the Services are used, diagnosing Service or
              technical problems, maintaining security, and personalizing
              content.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To operate, maintain, and provide to you the features and
              functionality of the Services.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To provide statistics about the usage levels of the Website and
              other related information to our service providers.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To notify you of data privacy incidents or provide you with legally
              required information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              To fulfill any other purpose for which you provide Personal
              Information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              In any other way we may describe and for which we obtain your
              consent when you provide the information and you give your consent.
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          We use cookies, clear gifs, and log file information to: (a) remember
          information so that you will not have to re-enter it during your visit or
          the next time you visit the Website; (b) provide custom, personalized
          content and information; (c) monitor the effectiveness of our Service; (d)
          monitor aggregate metrics such as total number of visitors, traffic, and
          demographic patterns; (e) diagnose or fix technology problems reported by
          our users or engineers that are associated with certain IP addresses; and,
          (f) help you efficiently access your information after you sign in.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Text Messages</strong>
          . We use the information we collect about you to deliver the Services we
          offer, and to operate and improve our Website. Our services may include a
          Short Message Service (“<strong className="font-bold">SMS</strong>”) which may deliver up to two
          messages per day to your wireless device. We may use your information to
          contact you about your purchases, Website updates, conduct surveys, or
          informational and service-related communications, including important
          security updates. You may remove your information by replying “STOP” to the
          SMS text message you received or by responding to the SMS you received from
          us with “STOP. After you send the SMS message “STOP” to us, we will send
          you an SMS message to confirm that you have been unsubscribed.
          Alternatively, you may submit your request by email to us, including the
          email address and phone number you registered with us, or by any reasonable
          means. After this, you will no longer receive SMS messages from us. If you
          want to join again, just sign up as you did the first time and we will
          start sending SMS messages to you again. For help, please reply to a text
          with HELP. Message and data rates may apply, depending on your cell phone
          plan. Carriers are not liable for delayed or undelivered messages.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">How We Share Your Personal Information</strong>
        </p>
        <p className=" mb-4 mt-2">
          We may or do disclose your Personal Information, in whole or in part, to
          the following types of third parties, and for one or more the following
          purposes:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              Data storage or hosting providers for the secure storage and
              transmission of your data
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Software and data service providers for the management and tracking
              of your data
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Technology providers who assist in the development and management
              of our Website
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Identity management providers for authentication purposes
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Legal and compliance consultants, such as external counsel,
              external auditors, or tax consultants
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              Payment solution providers for the secure processing of payments
              you provide to us
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          <u>Disclosures to Service Providers</u>
          : We may share your Personal Information with third parties for the purpose
          of providing or improving the Services to you. We may share your Personal
          Information with third party service providers which perform services on
          our behalf (“<strong className="font-bold">Service Providers</strong>”). This includes, without
          limitation, Service Providers which provide services relating to: outbound
          and/or inbound communications, marketing assistance, creating, hosting,
          and/or providing customer or support services on our behalf, managing our
          conferences and other events, or fulfilling physical or electronic
          deliveries of purchases made through the Services. These Service Providers
          may have access to your Personal Information in order to provide these
          services to us or on our behalf. If we engage Service Providers for any of
          the foregoing, use of your Personal Information will be bound by
          obligations of confidentialityand their use of Personal Information will be
          restricted to providing their services to us. We may store Personal
          Information in locations outside our direct control (for instance, on
          servers or databases located or co-located with hosting Service Providers).
        </p>
        <p className=" mb-4 mt-2">
          <u>Required Disclosures</u>
          : Except as otherwise described in this Privacy Policy, we will not
          disclose your Personal Information to any third party unless required to do
          so by law, court order, legal process, or subpoena, including, but not
          limited to, in order to respond to any government, regulatory, or licensing
          request, or if we believe that such action is necessary to: (a) comply with
          the law, comply with legal process served on us or our affiliates,
          subsidiaries, contracted vendors, or affinity partners, or investigate,
          prevent, or take action regarding suspected or actual illegal activities;
          (b) enforce our Terms or customer agreement (including for billing and
          collection purposes); (c) take precautions against liability; (d)
          investigate and defend ourselves against any third-party claims or
          allegations; (e) assist government enforcement agencies or to meet national
          security requirements; (f) to protect the security or integrity of our
          Website, Services; or, (g) exercise or protect the rights, property, or
          personal safety of us, our users or others.
        </p>
        <p className=" mb-4 mt-2">
          We will attempt to notify you about these requests unless: (i) providing
          notice is prohibited by the legal process itself, by court order we
          receive, or by applicable law, or (ii) we believe that providing notice
          would be futile, ineffective, create a risk of injury or bodily harm to an
          individual or group, or create or increase a risk of fraud upon us, our
          users, our Website, or our Services. In instances where we comply with
          legal requests without notice for these reasons, we will attempt to notify
          that user about the request after the fact if we determine in good faith
          that we are no longer legally prohibited from doing so and that no risk
          scenarios described in this paragraph apply.
        </p>
        <p className=" mb-4 mt-2">
          It is likely that the identity and categories of such third parties will
          change during the life of your account. We require that our third-party
          service providers only use your Personal Information as necessary to
          provide the requested services to us and each service provider is subject
          to a set of terms consistent with the applicable portions of this Privacy
          Policy.
        </p>
        <p className=" mb-4 mt-2">
          <u>SALE/DISCLOSURE OF PERSONAL INFORMATION</u>
        </p>
        <p className=" mb-4 mt-2">
          <u>No Sale of Personal Information</u>
          . We do not disclose or share your Personal Information with any third
          parties for which we receive any monetary or other valuable consideration.
          <strong className="font-bold">
            <u>
              In other words, we do not sell your Personal Information, period.
            </u>
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          <u>
            Your Consent to Disclosure/Transfer/Sale of Your Personal Information
          </u>
          . You consent to our disclosure of your Personal Information, De-Identified
          Personal Information, and other information you provide to us (“    <strong className="font-bold">Transferred Information</strong>”) to a potential or actual buyer
          or acquirer of our company or other successor for the purpose of
          considering or undergoing a merger, divestiture, restructuring,
          reorganization, dissolution, change in control, or sale or transfer of some
          or all of our assets (each of the foregoing referred to as a “    <strong className="font-bold">Transfer</strong>”), whether as a going concern or as part of
          bankruptcy, liquidation or other court proceeding, in which Personal
          Information held by us is among the assets transferred. You agree to and do
          hereby consent to (and shall not object to) our assignment, conveyance,
          transfer, and/or license (whether by contract, merger or operation of law)
          as part of a Transfer, of any or all of our rights, in whole or in part, in
          or to Transferred Information and your consents, with or without notice to
          you and without your further consent. We cannot make any representations
          regarding the use or transfer of Transferred Information that we may have
          in the event of our bankruptcy, reorganization, insolvency, receivership,
          or an assignment for the benefit of creditors. By providing any Personal
          Information, you expressly agree and consent to the use and/or transfer of
          Transferred Information or other information in connection with a Transfer.
          Furthermore, except as required by law, we are not and will not be
          responsible for any breach of security by any third parties or for any
          actions of any third parties that receive any of the Transferred
          Information that is disclosed to us.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Data Transfer/Access Outside of the United States</strong>
        </p>
        <p className=" mb-4 mt-2">
          We have our headquarters in the United States. The Personal Information we
          or our service providers collect may be stored and processed in servers
          within or outside of the United States and wherever we and our service
          providers have facilities around the globe, and certain information may be
          accessible by persons or companies outside of the United States who provide
          services for us. As such, we and our service providers may transfer your
          Personal Information to, or access it in, jurisdictions that may not
          provide equivalent levels of data protection as your home jurisdiction. We
          will take reasonable steps to ensure that your Personal Information
          receives an adequate level of protection in the jurisdictions in which we
          process it. If you are located in the UK, European Economic Area (“    <strong className="font-bold">EEA</strong>”), or Switzerland, we provide adequate protection for
          the transfer of Personal Information to countries outside of the UK, EEA,
          or Switzerland through a series of intercompany agreements based on the
          Standard Contractual Clauses, where applicable. We may also need to
          transfer your information to other group companies or service providers in
          countries outside the EEA. This may happen if our servers or suppliers and
          service providers are based outside the UK, EEA, or Switzerland, or if you
          use our services and products while visiting countries outside this area.
        </p>
        <p className=" mb-4 mt-2">
          If you are a resident of a country other than the United States, you
          acknowledge and consent to our collecting, transmitting, processing,
          transferring, and storing your Personal Information out of the country in
          which you reside.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Privacy Outside of the United States</strong>
        </p>
        <p className=" mb-4 mt-2">
          If you are a citizen or resident of the UK, EEA, Switzerland, or other
          regions with laws governing data collection and use that may differ from
          the laws in the United States, please note that we may transfer your
          information to a country or jurisdiction that does not have the same data
          protection laws as your jurisdiction. We may do so to process your
          information by staff operating outside the these countries who work for us
          or for one of our service providers.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Security</strong>
          We have implemented measures designed to secure your Personal Information
          from accidental loss and from unauthorized access, use, alteration and
          disclosure. Your Personal Information is contained behind secured networks
          and a firewall and is only accessible by our personnel and by a limited
          number of Service Providers who have special access rights to our systems,
          and who are required to keep the information confidential. Our Website is
          scanned on a regular basis for security holes and known vulnerabilities in
          order to make your visit to our Website safe.
        </p>
        <p className=" mb-4 mt-2">
          Any payment transactions will be performed using our third party payment
          processors or gateways, who will use appropriate security procedures
          designed to protect your information. We do not collect or store full
          credit card numbers.
        </p>
        <p className=" mb-4 mt-2">
          Our agents, contractors, service providers, and partners who require access
          to your Personal Information in order to provide services to us or to you
          on our behalf are also required to keep the information confidential in a
          manner consistent with this Privacy Policy and are not permitted to
          disclose the information to third parties or use the information for any
          purpose other than to carry out the services they are performing for us, or
          as permitted pursuant to our agreement with them.
        </p>
        <p className=" mb-4 mt-2">
          The safety and security of your information also depends on you. You should
          maintain good internet security practices. Where you have
          password-protected access to an account or certain parts of the Website or
          Services, you are responsible for keeping this password confidential. You
          should not share your password with anyone. You must prevent unauthorized
          access to your account and Personal Information by selecting and protecting
          your password appropriately and limiting access to your computer or mobile
          device and browser by signing off after you have finished accessing your
          account. If your email account or Facebook account is compromised this
          could allow access to your account with us if you have given up those
          details and/or permitted access through those accounts. If your email
          account is compromised it could be used to ask us to reset a password and
          gain access to your account with us. If you think that any of your accounts
          have been compromised you should change your account credentials with us,
          and in particular make sure any compromised account does not allow access
          to your account with us. The information you share in public areas may be
          viewed by other users. We will never email you to ask for your password or
          other account login information. If you receive such an email, please send
          it to us so we can investigate.
        </p>
        <p className=" mb-4 mt-2">
          You hereby release and forever discharge us and our affiliates,
          subsidiaries, officers, directors, employees, and agents, and their
          respective successors and assigns, and you will indemnify, defend and hold
          us harmless, from and against any liability, claim, or cost (including
          attorneys’ fees), arising directly or indirectly from any failure by you to
          maintain the security of your email or other accounts that directly or
          indirectly results in an unauthorized third party having access to such
          email or accounts or causes us to transfer funds based on instructions
          purporting to have originated from you (i.e., “wire transfer fraud” or
          “business email compromise” events).
        </p>
        <p className=" mb-4 mt-2">
          Unfortunately, the transmission of information via the internet is not
          completely secure. Although we do use security measures designed to protect
          your Personal Information, we cannot guarantee the security of your
          Personal Information transmitted to us or which we obtain. Any transmission
          of Personal Information is at your own risk. Unauthorized entry or use, or
          hardware or software failure, and other factors, may compromise the
          security of user information at any time. We are not responsible for
          circumvention of any privacy settings or security measures contained on the
          Website or used with our Services.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Data Retention</strong>
        </p>
        <p className=" mb-4 mt-2">
          The time period for which we retain your Personal Information depend on the
          purposes for which we use it. We will retain your Personal Information for
          as long as your account is active, or as long as you are a registered
          account holder or user of our Services or for as long as we have another
          business purpose to do so (such as, but not limited to, for business, tax,
          or legal purposes) and, thereafter, for no longer than is required or
          permitted by law, or our records retention policy, reasonably necessary for
          internal reporting and reconciliation purposes, or to provide you with
          feedback or information you might request. This period of retention is
          subject to our review and alteration.
        </p>
        <p className=" mb-4 mt-2">
          Following termination or deactivation of your user account, we may retain
          your profile information and all information posted to public areas of the
          Website. Following termination or deactivation of your user account, we may
          retain your Personal Information and other data, but will maintain it as
          confidential according to the Terms, this Privacy Policy, and as required
          by applicable law. We have the right to delete all of your Personal
          Information and other data after termination of your user account without
          notice to you.
        </p>
        <p className=" mb-4 mt-2">
          We may retain De-Identified Personal Information for as long as we deem
          appropriate.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">What Information You Can Access, Change, or Delete</strong>
        </p>
        <p className=" mb-4 mt-2">
          Through your user account settings page, you may access and, in some cases,
          edit, or delete certain information you have provided to us, such as name
          and password, email address, address, user profile information, etc. The
          information that you can view, update, and delete may change as the
          Products, Website, Services or our practices change. If you have any
          questions about viewing or updating information we have on file about you,
          please contact us.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Privacy Notice for California Residents</strong>
        </p>
        <p className=" mb-4 mt-2">
          The following in this section applies only to California residents.
        </p>
        <p className=" mb-4 mt-2">
          <em>
            <u>
              California Online Privacy Protection Act (“CalOPPA”; Calif. Bus.
              &amp; Prof. Code § 22575-22578, available
            </u>
          </em>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&amp;division=8.&amp;title=&amp;part=&amp;chapter=22.&amp;article="
          >
            <em><u>here</u></em>
          </a>
          <em><u>)</u></em>
          <em>:</em>
        </p>
        <p className=" mb-4 mt-2">
          CalOPPA applies only to companies which collect Personal Information of
          California residents.
        </p>
        <p className=" mb-4 mt-2">
          <u>How We Respond to Do Not Track Signals</u>
          .
        </p>
        <p className=" mb-4 mt-2">
          CalOPPA requires us to let you know how we respond to web browser Do Not
          Track (DNT) signals. Do Not Track (DNT) is a privacy preference you can set
          in your web browser to indicate that you do not want certain information
          about your webpage visits collected across websites when you have not
          interacted with that service on the page. For details, including how to
          turn on Do Not Track, see
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.donottrack.us/"
          >
            <u>here</u>
          </a>
          . Because there currently isn’t an industry or legal standard recognizing
          or honoring DNT signals, we don’t respond to them at this time. We await
          the result of work by the privacy community and industry to determine when
          such a response is appropriate and what form it should take.
        </p>
        <p className=" mb-4 mt-2">
          <u>Third-Party Behavioral Tracking</u>
          . We do not allow third-party behavioral tracking of Personal Information,
          though we may use De-Identified Personal Information to track users’ click
          or browsing patterns.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Notices; Opting Out</strong>
        </p>
        <p className=" mb-4 mt-2">
          By providing us with your email address (including by “following,”
          “liking,” linking your account to our Website or Service or other services,
          etc., on a third party website or network), you consent to our using the
          email address to send you Service-related notices by email, including any
          notices required by law (e.g., notice of data privacy or security
          incidents), in lieu of communication by postal mail. You also agree that we
          may send you notifications of activity regarding the Service, the Website,
          your Personal Information, or any aspect of our relationship, to the email
          address you give us, in accordance with any applicable privacy settings. We
          may use your email address to send you other messages or content, such as,
          but not limited to, newsletters, additions or changes to features of the
          Service, or special offers. If you do not want to receive such email
          messages, you may opt out by emailing us your opt-out request or, where
          available, by clicking “unsubscribe” at the bottom of our e-newsletter.
          Opting out may prevent you from receiving email messages regarding updates,
          improvements, special features, announcements, or offers. You may not opt
          out of Service-related emails.
        </p>
        <p className=" mb-4 mt-2">
          You can add, update, or delete information as explained above. When you
          update information, however, we may maintain a copy of the unrevised
          information in our records. You may request deletion of your account by
          emailing us. It is your responsibility to maintain your current email
          address with us.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">Contact Information</strong>
        </p>
        <p className=" mb-4 mt-2">
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us: by email at
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://info@snowcrash.com/"
          >
            <u>info@snowcrash.com</u>
          </a>
          , or by mail at Snowcrash, Inc., 5450 W. Washington Blvd, Los Angeles, CA
          90016; Attn: Privacy.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            GDPR: The Follow Provisions Apply Only to Citizens and Residents of the
            United Kingdom, EEA, and Switzerland
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          The following provisions apply only if you are a citizen or resident of the
          UK, EEA, or Switzerland. For such citizens or residents, all processing of
          your Personal Information is performed in accordance with privacy rights
          and regulations, in particular, (EU) 2016/679 of the European Parliament
          and of the Council of 27 April 2016, known as the General Data Protection
          Regulation (“<strong className="font-bold">GDPR</strong>”), and our processing will take place in
          accordance with the GDPR. For purposes of the GDPR, we will be the “data
          controller” of Personal Information (referred to and defined in the GDPR
          (available
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gdpr-info.eu/art-4-gdpr/"
          >
            <u>here</u>
          </a>
          ) as “Personal Data”) we collect through the Website, unless we collect
          such information on behalf of a “data controller” in which case we will be
          a “data processor.” This Privacy Policy does not apply to websites,
          applications or services that do not display or link to this Privacy Policy
          or that display or link to a different privacy policy. For UK, EEA, and
          Switzerland residents and citizens only, to the extent any definition in
          this Privacy Policy conflicts with a definition under the GDPR, the GDPR
          definition shall control.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            <u>
              Our Legal Basis for Processing Personal Data (UK, EEA, and Swiss
              Visitors Only)
            </u>
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          If you are a visitor using our Website from the UK, EEA or Switzerland, our
          legal basis for collecting and using the Personal Data described above will
          depend on the Personal Data concerned and the specific context in which we
          collect it. However, we will normally collect Personal Data from you only
          where we need the Personal Data to perform Services for you for which you
          have contracted with us, or where the processing is in our legitimate
          interests or rely upon your consent where we are legally required to do so
          and not overridden by your data protection interests or fundamental rights
          and freedoms. In some cases, we may also have a legal obligation to collect
          Personal Data from you or may otherwise need the Personal Data to protect
          your vital interests or those of another person.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"><u></u></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"><u>Your Data Rights Under GDPR</u></strong>
        </p>
        <p className=" mb-4 mt-2">
          If you are subject to GDPR, your rights include the following:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to access</strong>
              - Upon request, we will confirm any processing of your Personal
              Information and, and provide you with a copy of that Personal
              Information in an acceptable machine-readable format.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to rectification</strong>
              - You have the right to have us correct any inaccurate Personal
              Information or to have us complete any incomplete Personal
              Information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to erasure</strong>
              - You may ask us to delete or remove your Personal Information and
              we will do so in some circumstances, such as where we no longer
              need it (we may not delete your data when other interests outweigh
              your right to deletion).
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to restrict processing</strong>
              - You have the right to ask us to suppress the processing of your
              Personal Information but we may still store your Personal
              Information. See below for more information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to object to processing</strong>
              - You have the right to object to your Personal Information used in
              the following manners: (a) processing based on legitimate interests
              or the performance of a task in the public interest/exercise of
              official authority (including profiling); (b) direct marketing
              (including profiling); and, (c) processing for purposes of
              scientific/historical research and statistics. See below for more
              information.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to data portability</strong>
              - You have the right to obtain your Personal Information from us
              that you consented to give us or that is necessary to perform
              fulfillment of member benefits with you. We will give you your
              Personal Information in a structured, commonly used and
              machine-readable format.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to complain to a supervisory authority</strong>
              - You have the right to file a complaint with a supervisory
              authority, in particular in the European member state of your
              habitual residence, place of work or place of the alleged
              infringement if you consider that the processing of Personal
              Information relating to you infringes upon your rights.
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              <strong className="font-bold">The right to withdraw consent</strong>
              - If we are processing your Personal Information based on your
              consent to do so, you may withdraw that consent at any time.
            </p>
          </li>
        </ul>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">What is the legal basis?</strong>
        </p>
        <p className=" mb-4 mt-2">
          We collect and process your personal information in compliance with the
          GDPR and the applicable EU laws.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            Collection and processing is based on your consent: Art. 6(1)a GDPR,
            Art. 4(11) GDPR
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          We will always ask for your consent to collect and process your personal
          information for the aforementioned specific purposes, unless the collection
          and processing of your personal information is permitted by statutory laws.
          Where you have provided us with your consent to the collection and
          processing of your personal information for the aforementioned specific
          purposes, you have the right to withdraw your consent at any time.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            Collection and processing is necessary for taking steps prior to enter
            into a contract: Art. 6 (1)b GDPR
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          The collection and processing of your personal information may be necessary
          for the performance of a contract to which you may be a party. Prior to
          entering into such contract, the collection and processing of your personal
          information may also be necessary in order to take steps at your request.
          This applies for installation and the use of our extension as well as any
          payment processing in connection with donations.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            Collection and processing is necessary for compliance with a legal
            obligation to which the Controller is subject: Art. 6 (1)c GDPR
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          Collection and processing of your personal information may be necessary for
          compliance with a legal obligation to which we are subject under EU laws or
          the laws of a EU Member State.
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold"></strong>
        </p>
        <p className=" mb-4 mt-2">
          <strong className="font-bold">
            Collection and processing is necessary for the purposes of our
            legitimate interests: Art. 6 (1)f GDPR
          </strong>
        </p>
        <p className=" mb-4 mt-2">
          The collection and processing of your personal information may be necessary
          for the purposes of our legitimate interests. Such legitimate interest
          purposes may include:
        </p>
        <ul>
          <li>
            <p className=" mb-4 mt-2">
              fraud prevention
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              ensuring network and information security
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              indicating possible criminal acts or threats to public security,
              including enhancing protection of our community against spam,
              harassment, intellectual property infringement, crime, and security
              risks of all kind, and enforcing legal claims, including
              investigation of potential violations of our Terms of Use
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              when we are complying with legal obligations
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              processing employee or visitor, member, attendee, or registrant
              data
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              performing the function or service you requested of us
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              providing our services and their functionality to you where such
              processing is necessary for the purposes of the legitimate
              interests pursued by us or by our service providers related to the
              services
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              direct marketing
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              the relevant and appropriate relationship we have with you
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              analytics, e.g., assess the number of visitors, page views, use of
              the Site, etc., in order to understand how our Site and services
              are being used, to optimize the Site and/or future communications,
              and to develop new services and Site features
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              updating your information and preferences
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              offering and improving our services
            </p>
          </li>
          <li>
            <p className=" mb-4 mt-2">
              enforcing legal claims, including investigation of potential
              violations of applicable Terms of Use
            </p>
          </li>
        </ul>

      </div>
    </Scaffold>
  );
};

export default Privacy;
