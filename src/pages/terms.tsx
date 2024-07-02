import { type NextPage } from "next";
import { api } from "../utils/api";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StaticBackground } from "../components/BackgroundStatic";
import { generateHTML } from "../core/contentUtils";
import { Scaffold } from "../components/Scaffold";

const Terms: NextPage = () => {
  const content = api.content.getPage.useQuery({
    id: "63ff67c485ba1d133222ea25",
  });

  const html = content.data
    ? generateHTML(JSON.parse(content.data?.content))
    : "";

  return (
    <Scaffold>
      <div
        id="previewPage"
        className="p-8 sm:p-20 md:p-40"

      >
        <div className="text-normal font-light font-poppins text-black">
          <p>
            <strong className="font-bold text-xl"> Terms of Service</strong>
          </p>
          <p>
            Effective Date: January 13, 2023
          </p>
          <ol>
            <li>
              <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
                <strong>Introduction</strong>
              </h3>
            </li>
          </ol>
          <p>
            A. Welcome to Snowcrash. Through our
            <a target="_blank" rel="noopener noreferrer" href="https://snowcrash.com/">
              <u>snowcrash.com</u>
            </a>
            website (“<strong>Website</strong>”) we provide a platform and services for
            displaying, buying, and selling non-fungible tokens (“<strong>NFTs</strong>
            ”) in various items (collectively, the “<strong>Services</strong>”). The
            Website is owned and operated by Snowcrash, Inc. (“    <strong>Snowcrash</strong>”, “<strong>we</strong>”, “<strong>us</strong>”
            or “<strong>our</strong>”).
          </p>
          <p>
            B. Your use of our Website and our Services, is governed by these Terms of
            Service and our privacy policy (available at
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://snowcrash.com/privacy"
            >
              <u>https://snowcrash.com/privacy</u>
            </a>
            , which may be amended from time to time and effective upon posting, and
            which is incorporated by reference herein (“<strong>Privacy Policy</strong>
            ”) (collectively, these “<strong>Terms</strong>”). References to “    <strong>Users</strong>”, “<strong>you</strong>” or “<strong>your</strong>”
            mean you as a casual visitor, someone who has created a user account for
            receiving information from us, or a user of our Services, as applicable.
            The Terms apply to you as applicable to the type of user you are. These
            Terms solely govern the use of our Website and Services and does not
            include additional terms and conditions to which specific NFTs and
            associated content may be subject.
          </p>
          <p>
            <strong>C. IMPORTANT – PLEASE READ CAREFULLY:</strong>
          </p>
          <p>
            i. THESE TERMS SET FORTH THE LEGALLY BINDING TERMS AND CONDITIONS THAT
            GOVERN YOUR USE OF THE WEBSITE AND SERVICES AND THE PURCHASE AND SALE OF
            OUR PRODUCTS. BY ACCESSING OR USING THE WEBSITE OR SERVICES, OR PURCHASING
            OUR PRODUCTS, YOU ARE ACCEPTING THESE TERMS.
          </p>
          <p>
            ii. By clicking the “I Accept” box, or by using the Website or the
            Services, you agree that these Terms (including the Privacy Policy) are a
            binding agreement between us and you.
          </p>
          <p>
            IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE THE WEBSITE OR THE
            SERVICES.
            <strong>
              IMPORTANT: THESE TERMS CONTAIN AN ARBITRATION PROVISION REQUIRING ALL
              CLAIMS TO BE RESOLVED BY WAY OF BINDING ARBITRATION, AND ALSO CONTAINS
              A CLASS ACTION AND JURY TRIAL RIGHT WAIVER.
            </strong>
            Please carefully review Section 21 (“Dispute Resolution”) of these Terms
            for more information.
          </p>
          <p>
            You agree that the Terms, combined with your act of using the Website, have
            the same legal force and effect as a written contract with your written
            signature and satisfy any laws that require a writing or signature,
            including any applicable statute of frauds. You further agree that you
            shall not challenge the validity, enforceability or admissibility of the
            Terms on the grounds that it was electronically transmitted or authorized.
            If you do not agree to be bound by these terms and conditions of use, you
            may not access or otherwise use this Website.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>2. Changes to the Terms</strong>
          </h3>
          <p>
            A. We regularly update and improve our Website and Services, and we may at
            times add, change, or remove features, and these Terms may also need to
            change. The current version of these Terms will be posted on our Website
            and will be effective immediately upon posting. By continuing to use the
            Website or purchase or use our Services following any such change, you
            accept and agree to be bound by such modified Terms. If you do not agree
            with the new Terms, you are free to reject them; unfortunately, that means
            you will no longer be able to use the Services.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>3. Privacy</strong>
          </h3>
          <p>
            A. <u>Personal Information</u>. We will maintain and use your “Personal
            Information” as defined in, and according to our Privacy Policy, and which
            may be modified from time to time in our discretion, which modifications
            are effective as of the date posted on our Website. Your continued access
            or use of the Website or purchase or use of our Services indicates that you
            agree with such modifications.
          </p>
          <p>
            B. <u>Use By Minors</u>. We do not knowingly collect or solicit Personal
            Information from children under 18. If you under 18, please do not attempt
            to register for the Services or send any Personal Information about
            yourself to us. If we learn we have collected Personal Information from a
            child under 18, we will delete that information as quickly as possible. If
            you believe that a child under 18 may have provided us Personal
            Information, please contact us.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>4. Registration; Account Ownership</strong>
          </h3>
          <p>
            A. The Services are intended for access and use by individuals who are at
            least 18 years old, and by agreeing to the Terms you represent (i) that you
            are at least 18 years old and reside in a state, region, or country in
            which the Services may legally be provided, (ii) you are the person whose
            name and other information have been provided for the account that you have
            or are creating, (iii) that you have not previously been suspended from use
            of the Services or your account terminated, and (iv) that your registration
            and your use of the Services is in compliance with any and all applicable
            laws and regulations. If you are using the Services on behalf of an
            organization, you represent and warrant that you have the authority to bind
            such organization to these Terms and you agree to be bound by these Terms
            on behalf of such organization.
          </p>
          <p>
            B. All of the information that you supply to us in creating your User
            account must be accurate. You are responsible for maintaining the
            confidentiality of your account and password. We reserve the right to
            invalidate your password and require you to change it if we believe it has
            become unsecure. We may reject any user name that violates these Terms,
            including any user name that uses another person’s identity or that
            violates our community and content guidelines. We may use the email you
            provide to us in your User account profile to provide you with service
            messages and updates. By becoming a User you are consenting to the receipt
            of these communications. If you are registering on behalf of your
            organization, you agree that your organization, and not us, are responsible
            for authorizing, deauthorizing and administering account access.
          </p>
          <p>
            C. <u>Suspension</u>. We may suspend your account and access to the
            Service, with or without notice, if you violate any provision of these
            Terms.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>5. Grant of Access</strong>
          </h3>
          <p>
            A. We grant you a personal, limited, non-transferable, non-exclusive right
            to access and use the Website and our Services as set forth in these Terms,
            provided that (i) your use of the Service as permitted hereunder is solely
            for your personal, non-commercial use; (ii) you will use the Website and
            the Services only for purposes that are permitted by these Terms; (iii) you
            will not alter, adapt or otherwise modify any part of the Service other
            than as may be reasonably necessary to use that part of the Service for its
            intended purpose; (iv) you will use the Website and the Services in
            accordance with all applicable laws and regulations; (v) you will otherwise
            comply in full with these Terms; and, (vi) you will not distribute or
            transfer any portion of the Website on any media without our prior written
            approval.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>6. Availability</strong>
          </h3>
          <p>
            A. We shall use commercially reasonable efforts to provide continuous
            access to the Website and the Services. We do not guarantee that the
            Website and Services will be accessible at all times. The Website or the
            Services may be unavailable during maintenance periods, during an
            emergency, or in an event beyond our reasonable control. In addition to
            normal maintenance, there may be events that will make the Website or
            Service inaccessible for a limited amount of time due to unforeseen
            circumstances. We have the right to refuse to provide access to the
            Services.
          </p>
          <p>
            B. We can subcontract Services, such as, but not limited to, data hosting
            and storage, payment processing, etc., to third parties, which may be
            inside or outside the United States.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>7. Restrictions on Use of the Website</strong>
          </h3>
          <p>
            A. You may use the Website only for lawful purposes and in accordance with
            these Terms. You agree not to use the Website:
          </p>
          <ul>
            <li>
              <p>
                In any way that violates any applicable federal, state, local or
                international law or regulation (including, without limitation, any
                laws regarding the export of data or software to and from the US or
                other countries).
              </p>
            </li>
            <li>
              <p>
                For the purpose of exploiting, harming or attempting to exploit or
                harm minors in any way by exposing them to inappropriate content,
                asking for personally identifiable information or otherwise.
              </p>
            </li>
            <li>
              <p>
                To transmit, or procure the sending of, any advertising or
                promotional material without our prior written consent, including
                any “junk mail”, “chain letter” or “spam” or any other similar
                solicitation.
              </p>
            </li>
            <li>
              <p>
                To impersonate or attempt to impersonate us, our employees, another
                user or any other person or entity (including, without limitation,
                by using email addresses or screen names associated with any of the
                foregoing).
              </p>
            </li>
            <li>
              <p>
                In any manner that could disable, overburden, damage, or impair the
                Website or interfere with any third party’s use of the Website,
                including their ability to engage in real time activities through
                the Website.
              </p>
            </li>
            <li>
              <p>
                To engage in any other conduct that restricts or inhibits anyone’s
                use or enjoyment of the Website, or which, as determined by us, may
                harm us or users of the Website or expose them to liability.
              </p>
            </li>
          </ul>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>8. Restrictions on Use</strong>
          </h3>
          <p>
            A. You agree that you will not, and will not attempt to:
          </p>
          <p>
            i. modify, translate, adapt or otherwise create derivative works or
            improvements, of the Website or any content or source code;
          </p>
          <p>
            ii. reverse engineer, disassemble, decompile, decode or otherwise attempt
            to derive or gain access to the source code of the Website or any part
            thereof;
          </p>
          <p>
            iii. rent, lease, lend, sell, resell, sublicense, assign, distribute,
            publish, publicly perform or display, transfer or otherwise make available
            the Website or any features or functionality of the Website, to any third
            party for any reason, including by making the Website available on a
            network where it is capable of being accessed by more than one device at
            any time;
          </p>
          <p>
            iv. use the Website or the Service in any way that is in violation of
            applicable law or regulation;
          </p>
          <p>
            v. use the Website or the Service in any way that (a) harasses, abuses,
            threatens, defames or otherwise infringes or violates the rights of others;
            uses technology or other means to access our proprietary information that
            is not authorized by us; computer network or user accounts; (b) encourages
            conduct that would constitute a criminal offense, or would give rise to
            civil liability; (c) “stalks” or otherwise harasses any person; (d) asks
            users or uses users to conceal the identity, source, or destination of any
            illegally gained money or products; (d) collect usernames and/or email
            addresses of users by electronic or other means for the purpose of sending
            unsolicited email or unauthorized framing of or linking to the Website; or,
            (f) forges headers or otherwise manipulates identifiers in order to
            disguise the origin of any information transmitted to or through the
            Website (either directly or indirectly through use of third party
            software);
          </p>
          <p>
            vi. remove, disable, circumvent or otherwise create or implement any
            workaround to any copy protection, rights management or security features
            in or protecting the Website;
          </p>
          <p>
            vii. upload or introduce any virus or malware to the Website;
          </p>
          <p>
            viii. interfere with the operation or availability of the Website, or the
            hardware, software and network(s) used to operate the Website;
          </p>
          <p>
            ix. sublicense or transfer any of your rights under these Terms or
            otherwise use the Service for the benefit of a third party, to operate a
            service bureau or for resale of the Service;
          </p>
          <p>
            x. create or access user accounts using any automated means or under false
            pretenses;
          </p>
          <p>
            xi. frame or mirror the Website or reformat it in any way or use deep
            links;
          </p>
          <p>
            xii. use any robot, spider, site search/retrieval application, or other
            manual or automatic device or process to retrieve, index, “data mine”, or
            in any way reproduce or circumvent the navigational structure or
            presentation of the Website or its contents;
          </p>
          <p>
            xiii. uses meta tags or code or other devices containing any reference to
            us or the Website (or any of our trademarks, trade names, service marks,
            logos, or slogans) to direct any person to any other website for any
            purpose;
          </p>
          <p>
            xiv. introduce any keystroke logging or any other monitoring code into the
            Website; or,
          </p>
          <p>
            xv. otherwise use the Service or the Website in any manner that exceeds the
            scope of the access right described above.
          </p>
          <p>
            B. You agree to not perform any security test activities related to the
            Website or the Services or associated infrastructure without our prior
            written consent, including, but not limited to: network discovery, port and
            service identification, vulnerability scanning, password cracking, remote
            access testing, or penetration testing.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>9. User Feedback; Third-Party Social Media Postings</strong>
          </h3>
          <p>
            A. By submitting any ideas or suggestions to us (through our Website,
            social media sites, or other digital platforms, or through Google, or other
            review sites, or other means) related to improvements to the Website or
            Services (collectively, “<strong>Feedback</strong>”) you agree that such
            Feedback shall be deemed, and shall remain, our property, and you agree to
            and do hereby assign to us all your right, title, and interest in and to
            all Feedback (including without limitation intellectual property rights and
            moral rights) without compensation or further notice to you. We shall be
            entitled to use of the Feedback without restriction for any purpose
            whatsoever, commercial or otherwise, without compensation or further notice
            to you,. None of the Feedback shall be subject to any obligation of
            confidentiality on our part and we shall not be liable for any use or
            disclosure of any Feedback.
          </p>
          <p>
            B. By posting or submitting for posting User Content (as defined below) to
            our social media pages or platforms, or on other websites, e.g., Facebook,
            Google, Yelp, Trip Advisor, etc., you agree to and do hereby grant us and
            our licensors, affiliates, partners, successors and assigns, a
            nonexclusive, perpetual, irrevocable, worldwide, sublicensable,
            transferrable, royalty-free right and license to use, store, display,
            publish, transmit, transfer, distribute, reproduce, rearrange, edit,
            modify, aggregate, summarize, translate, create derivative works of and
            publicly perform the User Content that you post or otherwise submit to us
            for any purpose, in any form, medium, or technology now known or later
            developed.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>10. User Content</strong>
          </h3>
          <p>
            A. The Website may permit the posting or submission for posting of content,
            including, but not limited to, reviews, comments, or other textual content,
            files, images, photographs, videos, animation, sounds, musical works, data,
            or other materials and content by you, other than underlying artwork
            displayed for purchase or sale on the Website (collectively, “    <strong>User Content</strong>”). We do not endorse or approve any User
            Content submitted or posted. We respect the intellectual property rights of
            others. You must have the legal right to submit to us or, where permitted,
            post any User Content to the Website. You are solely responsible for any
            User Content that you create, transmit, or display while using the Website.
            All User Content you post or submit for posting to the Website is deemed
            nonconfidential.
          </p>
          <p>
            B. You agree to not submit, upload or post any User Content to the Website
            that infringes or may infringe the copyright, trademark or other
            intellectual property rights of a third party nor may you submit User
            Content that violates any third party’s right of privacy or right of
            publicity. You may submit only User Content permitted by the owner or by
            law.
          </p>
          <p>
            C. You agree to not engage, or permit others to have access to your login
            credentials to engage, in the practices of “screen scraping,” “database
            scraping,” or any other activity with the purpose of obtaining lists of
            users or other information or content.
          </p>
          <p>
            D. You also agree to take sole responsibility for any royalties, fees or
            other monies owed to any person or entity by reason of any User Content you
            post or transmit through the Website or Service.
          </p>
          <p>
            E. <u>User Content License from You</u>
          </p>
          <p>
            i. You retain copyright and any other rights you already hold in User
            Content which you submit, post or display on or through, the Services. When
            you post or submit for posting User Content to the Website, you agree to
            and do hereby expressly grant to us and to our affiliates, parents,
            subsidiaries, agents, representatives, licensors or other third party
            partners, and our successors and assigns, a nonexclusive, worldwide,
            perpetual, irrevocable, transferrable, sub-licensable license and right to
            use, without restriction, including, but not limited to the right to quote,
            re-post, publish, use, adapt, translate, archive, store, reproduce, modify,
            create derivative works from, syndicate, license, print, sublicense,
            distribute, transmit, broadcast, and otherwise communicate, and publicly
            display or perform the User Content and to provide such User Content to any
            other user of the Website or the Service, or any portion thereof, in any
            manner or form and in any medium or forum, whether now known or hereafter
            devised, without notice, payment or attribution of any kind to you or any
            third party (collectively, the “<strong>License</strong>”). You grant us
            all licenses, consents and clearances to enable the use such User Content
            for such purposes. You waive and agree not to assert any moral or similar
            rights you may have in such User Content.
          </p>
          <p>
            ii. You agree that this License includes a right for us to make such User
            Content available to other companies, organizations or individuals with
            whom we have relationships for the provision of services, and to use such
            User Content in connection with the provision of those services.
          </p>
          <p>
            iii. You understand that we, in operating the Website and/or in performing
            the required technical steps to provide the Services to our users, may (a)
            transmit or distribute your User Content over various public networks and
            in various media; and (b) make such changes to your User Content as are
            necessary to conform and adapt that User Content to the technical
            requirements of connecting networks, devices, services or media. You agree
            that the License shall permit us to take these actions.
          </p>
          <p>
            E. <u>User Content Submission and Posting Guidelines</u>.
          </p>
          <p>
            A. You are responsible for all User Content that you submit to us. You may
            not submit or post User Content that:
          </p>
          <p>
            i. Is not your own original creation or that you do not have permission to
            use (keep in mind that just because something on the internet does not have
            a copyright notice on it doesn’t mean you can use it without permission);
          </p>
          <p>
            ii. Infringes the copyright, trademark, patent right, or other proprietary
            right of any person or that is used without the permission of the owner;
          </p>
          <p>
            iii. You know to be inaccurate;
          </p>
          <p>
            iv. Is pornographic, sexually explicit, or obscene;
          </p>
          <p>
            v. Exploits children or minors;
          </p>
          <p>
            vi. Violates the rights of privacy or publicity of any person;
          </p>
          <p>
            vii. Is harassing, libelous, slanderous, or defamatory;
          </p>
          <p>
            viii. Contains any personally identifying information about any person
            without their consent or about any person who is a minor;
          </p>
          <p>
            ix. May be deemed generally offensive to the Website community, including
            blatant expressions of bigotry, prejudice, racism, hatred, profanity or
            religious or political radicalism;
          </p>
          <p>
            x. Includes advertisements, promotions, solicitations, spam, or offers to
            sell any goods or services for any commercial purpose;
          </p>
          <p>
            xi. Is off topic;
          </p>
          <p>
            xii. Is intended to provide professional advice, including but not limited
            to, the provision of medical treatment, or legal, financial or investment
            advice;
          </p>
          <p>
            xiii. Is intended to solicit, recommend, endorse, or offer to buy or sell
            any securities or other financial instruments, tout stocks, or recommend
            that any particular security, portfolio of securities, transaction, or
            investment strategy is suitable for you or any specific person;
          </p>
          <p>
            xiv. Violates any local, state, federal, and/or international laws or
            regulations;
          </p>
          <p>
            xv. Promotes or provides instructional information about illegal or illicit
            activities;
          </p>
          <p>
            xvi. Contains software viruses or any other computer code, files, or
            programs designed to destroy, interrupt, or otherwise limit the
            functionality of any computer software, computer hardware, or other
            equipment; or,
          </p>
          <p>
            xvii. Is intended to overwhelm, cause technical disruptions of or denial of
            service to the Website.
          </p>
          <p>
            F. <u>Removal of User Content</u>. We reserve the right (but have no
            obligation) to remove, block, edit, move or disable User Content that is
            objectionable to us for any reason. The decision to remove User Content at
            any time is in our sole and final discretion. To the maximum extent
            permitted by applicable law, we do not assume any responsibility or
            liability for User Content or for any failure to or delay in removing User
            Content or other Content. You are solely responsible for your User Content
            and may be held liable for User Content that you post.
          </p>
          <p>
            G. <u>DMCA Notice</u>. If you believe that any content on the Website
            violates these Terms or your intellectual property rights, you can report
            such violation to us in accordance with the Digital Millennium Copyright
            Act (17 U.S.C. §512, “<strong>DMCA</strong>”). In the case of an alleged
            infringement, please provide the following information:
          </p>
          <p>
            i. A description of the copyrighted work or other intellectual property
            that you claim has been infringed;
          </p>
          <p>
            ii. A description of where the material that you claim is infringing is
            located on the Website (including the exact URL);
          </p>
          <p>
            iii. An address, a telephone number, and an email address where we can
            contact you;
          </p>
          <p>
            iv. A statement that you have a good faith belief that the use is not
            authorized by the copyright or other intellectual property rights owner, by
            its agent, or by law;
          </p>
          <p>
            v. A statement by you under penalty of perjury that the information in your
            notice is accurate and that you are the copyright or intellectual property
            owner or are authorized to act on the owner’s behalf; and,
          </p>
          <p>
            vi. Your electronic or physical signature, or that of the person authorized
            to act on behalf of the owner of the copyright or other right being
            infringed.We may request additional information before we remove allegedly
            infringing material. You may report a copyright violation by providing the
            above information to the designated agent listed below.
          </p>
          <p>
            We may request additional information before we remove allegedly infringing
            material. You may report a copyright violation by providing the above
            information to the designated agent listed below.
          </p>
          <p>
            Snowcrash, Inc. Attn: Privacy Director Address: 5450 W. Washington Blvd,
            Los Angeles, CA 90016 Email:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://info@snowcrash.com/"
            >
              <u>info@snowcrash.com</u>
            </a>
          </p>
          <p>
            We have the right to terminate the user account of any User who repeatedly
            submits content that violates our intellectual property policies. A repeat
            infringer is a user who has been notified of infringing activity more than
            twice and/or has had User Content removed from the Website more than twice.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>11. Transactions; Billing; Payment</strong>
          </h3>
          <p>
            A. <u>Transactions</u>
          </p>
          <p>
            i. By buying or selling NFTs on the Website you agree to pay the applicable
            fees and you hereby authorize us to automatically deduct any fees due from
            your payment or account. We will provide you with a description of the fees
            prior to your purchase or sale of an NFT.
          </p>
          <p>
            ii. Users will ordinarily pay the fees directly as set forth herein.
            Certain users may, in our sole discretion, have the opportunity to deposit
            funds to their account by credit card, crypto wallet, or other permitted
            method, and will be able to monitor the level of funds in the account by
            going to the account page on the Website. We do not use your funds or pool
            your funds with those of other users to add functionality or utility to the
            Services or NFTs being sold.
          </p>
          <p>
            iii. By submitting a Bid you agree that you are submitting a binding offer
            to purchase the NFT on which you have bid. When your Bid is received we
            will confirm receipt by email and it will be viewable in your account.
          </p>
          <p>
            iv. We do not make any representations as to the ownership or right of any
            seller regarding any items offered for sale on the Website. Ownership of a
            NFT does not necessarily mean that ownership of the copyright or other
            intellectual property right accompanies the NFT. Purchase of a NFT does not
            mean that the rights under copyright law in the underlying work transfer
            with the NFT. We do not make any representations regarding infringement by
            any item of any intellectual property rights.
          </p>
          <p>
            v. You consent to our collection and disbursement to the NFT creator
            royalties for any “Secondary Sale” (i.e., any sale of the NFT after the
            first sale) of items, and you hereby waive any “first sale” defense
            regarding any Secondary Sale activities resulting in payment of a royalty.
            The royalty may be deducted from the sale price of Secondary Sales. You
            acknowledge that the royalty may either be incorporated into the NFT’s
            smart contract or otherwise programmed into our Website.
          </p>
          <p>
            B. <u>Auctions</u>. We may conduct auctions for NFTs, and, if so, we will
            present our auction terms for your review.<u> </u>
          </p>
          <p>
            C. <u>Purchases</u>
          </p>
          <p>
            i. <u>Fees</u>. Fees for our Services are described in the applicable
            Website page for that NFT. We may change our fees at any time, which will
            be effective when posted.
          </p>
          <p>
            ii. <u>Payment Terms</u>
          </p>
          <p>
            (1) Unless different payment terms are specified in a Website, all fees are
            due in full upon purchase of the applicable Service or product.
          </p>
          <p>
            D. <u>Credit Card Processing</u>. We use a third party payment processing
            service for processing credit card payments. Your use of any of these
            provider’s services is subject to your agreement to and continued
            compliance with their terms and conditions.
          </p>
          <p>
            i. You are solely responsible for updating the payment method as changes
            become necessary.
          </p>
          <p>
            ii. We reserve the right to change the price of any of the Services, at any
            time, with or without notice. In any case where notice is given, such
            notice will be sent to the email address on file for your account. The new
            fees will apply starting on the next month you are charged.
          </p>
          <p>
            E. No refunds are provided unless and to the extent prohibited by law.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>12. Unclaimed Property</strong>
          </h3>
          <p>
            If we are holding funds in your account and have no record of your use of
            the Service for several years, we may be required, upon passage of
            applicable time periods, to report these funds as unclaimed property in
            accordance with the abandoned property and escheat laws. If this occurs, we
            will use reasonable efforts to give you written notice. If you fail to
            respond within seven business days or as required by law, we may be
            required to deliver any such funds to the applicable state or jurisdiction
            as unclaimed property. We reserve the right to deduct a dormancy fee or
            administrative fee from such unclaimed funds, as permitted by applicable
            law.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>13. Taxes</strong>
          </h3>
          <p>
            If any country, federal, provincial, regional, state or local entity with
            taxing authority over the Service imposes a tax, duty or fee directly on
            the Service provided to you by us under the Terms (excluding any income,
            business and occupation, capital gain, death or inheritance, or other
            indirect taxes), then we may pass the direct amount of such tax on to you,
            and you shall promptly pay that tax.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>14. Risks</strong>
          </h3>
          <p>
            A. Use of our Services, and NFTs in general, is accompanied by some
            inherent risks. The price and liquidity of NFTs and other blockchain assets
            are subject to real world and virtual market and other fluctuations,
            including the price of other types of digital assets. The market for NFTs
            is new and volatile, and the price of an NFT as it relates to fiat currency
            may greatly decrease over a short period of time, impacting the liquidity
            and price of the NFT. New technologies may replace NFTs and other digital
            assets and platforms, thereby limiting the liquidity and value of and
            demand for NFTs. Domestic and foreign laws and regulations may change and
            affect various aspects of the use, transfer, and value of NFTs. By their
            very nature, NFTs are not backed by any government and are not legal
            tender. NFT transactions are irreversible; unintended or fraudulent
            transactions may not be reversible or recoverable. You are responsible for
            determining the level of risk you are willing to assume. We do not provide
            any advice or recommendations concerning any aspect of NFT investments or
            strategy. Since NFTs are intangible assets, any title transfer of a NFT
            occurs on a decentralized leger and we cannot guarantee that the transfer
            can be achieved.
          </p>
          <p>
            B. We are not responsible for sustained losses due to vulnerability or any
            kind of failure, abnormal behavior of software (e.g., wallet, smart
            contract), blockchains, or any other features of an NFT. We are not
            responsible for sustained losses due to late reports by developers or
            representatives (or no report at all) of any issues with the blockchain
            supporting NFTs including forks, technical node issues or any other issues
            having fund losses as a result. We are not responsible for any sustained
            losses in the event we declare bankruptcy, go out of business, or otherwise
            cease operations.
          </p>
          <p>
            C. You acknowledge and accept the risks inherently present in the use of
            digital goods and digital assets. We are not responsible for sustained
            losses due to hacking, theft or misappropriation of digital assets,
            impersonation of legitimate NFT owners, counterfeit NFTs, unlawful creation
            of replicas of original content, or misuse of original content by bad
            actors.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>15. Term; Termination</strong>
          </h3>
          <p>
            A. <u>Term</u>. These Terms shall commence upon your use of the Website or
            the Service and shall continue until terminated.
          </p>
          <p>
            B. <u>Termination</u>.
          </p>
          <p>
            i. We reserve the right to deactivate any accounts which have not been
            active for at least six (6) months. We reserve the right to delete data in
            deactivated accounts.
          </p>
          <p>
            ii. We reserve the right to stop providing the Website or the Service to
            you or access to the Website at any time for any reason and without prior
            notice.
          </p>
          <p>
            iii. We reserve the right to modify, enhance, or remove features of the
            Website or the Service (including, without limitation, media content
            associated with any NFT) at any time without prior notice.
          </p>
          <p>
            iv. We reserve the right, in our sole discretion, to close your account,
            without prior notice, for any one or all of the following: (i) if you
            breach, whether intentionally or unintentionally, any of these Terms, any
            supplemental rules and guidelines, any of the terms and conditions of our
            service providers, or any of our rights; (ii) if we receive notice that you
            become subject to insolvency proceedings; (iii) upon our receipt of any
            third party chargeback associated with any payment method tendered as
            payment on your account; (iv) if we do not receive a written response from
            you within 48 hours of any notice sent to you by us relating to your abuse
            of the Website or violation of these Terms; (v) if, in our judgment, your
            use of the Website or the Service has the potential to pose any harm to us
            or to any of our affiliates, partners, service providers or customers; (vi)
            if your account becomes past due and is not paid within twenty days of
            becoming past due; (vii) if a hacked script or otherwise compromised
            website is discovered on our systems at the Service in use by you; (viii)
            if an unusual spike in resource usage is detected by our systems resulting
            in an account far outstripping the allotted resources; (ix) if you fail to
            cure any suspension of your account or any individual Service, to our
            satisfaction, and within the time frame we specify; or, (x) if, in our
            judgment, we have received too many complaints about your User Content
            (where submission of User Content is permitted). In the event of any such
            closure of your account, you will not be eligible for a refund of any fees
            and you may be prohibited from reopening your account, opening a new
            account or accessing any existing account. You agree that we shall not be
            liable, in any way, for any closure pursuant to this section of the Terms.
          </p>
          <p>
            v. Upon any closure of your account: (i) all rights granted to you and all
            our obligations to you hereunder shall cease immediately (except those
            expressly surviving or which by their nature would survive); (ii) all
            access to the Service and your account will cease immediately; (iii) you
            will be billed for, and we may automatically attempt to collect from your
            payment method, any outstanding amount owed; and (iv) we may delete all of
            your data and User Content from our servers and backup systems and we may
            not have or keep a backup of the data and User Content. We recommend that
            you run regular backups of any data you provide to us. As well, we also
            recommend that you ensure you have retrieved all data and User Content and
            made all necessary backups before submitting any request to close your
            account or any of the Service. You agree to and hereby do indemnify and
            hold us harmless from and against any and all claims, losses, or damages
            arising from any closure of your account. You are not permitted to access
            your account or any of the Service formerly associated with your account
            following any closure.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>16. Intellectual Property</strong>
          </h3>
          <p>
            A. <u>Ownership</u>. You agree that use of the Website and the Services
            does not constitute any basis for ownership of the Website or the Service
            and that we, our affiliates or our licensors own all legal right, title,
            and interest in and to the Website and the Services and all information,
            materials, images, software, photographs, articles, functions, text, and
            other content solely provided by or on our behalf on the Services
            (specifically excluding any User Content that is, as between you and us,
            your property but licensed to us). The Website and Services, are protected
            under the copyright laws and other intellectual property laws of the United
            States and other countries. We reserve all rights not expressly granted
            herein in and to the Website and Services. Unless otherwise noted, our name
            and all other trademarks, service marks, trade names, logos or other
            designations of source displayed on the Website are our property, or that
            of our affiliates or licensors. All third party trademarks, service marks,
            trade names, logos or other designations of source are the property of
            their respective owners. Nothing on the Website shall be construed as
            granting any license or right not expressly set forth herein. Any
            unauthorized use of the Website or Services will terminate the permission
            or license granted herein and may violate applicable law.
          </p>
          <p>
            B. By purchasing an NFT on the Website, you shall be receiving a limited,
            revocable, non-exclusive, non-transferable (except in the case of secondary
            sales), non-sublicensable, royalty-free license to display the original
            content underlying the NFT for your personal and non-commercial use. You
            understand and agree (a) that your purchase of an NFT does not give you any
            rights or licenses to the underlying content or associated intellectual
            property (except as expressly provided herein), (b) that you do not have
            the right to reproduce, distribute, create derivative works of, or
            otherwise commercialize any of the original content, and (c) that your
            purchase of an NFT does not entitle you to any equity or ownership interest
            in any entity, project, or endeavor. For the avoidance of doubt, the
            foregoing license shall not extend to you if the NFT is obtained through
            illegal or improper means. Furthermore, any purchaser of an NFT agrees that
            it may not, nor may it permit any third party, to: (i) use the original
            content in connection with images, videos, or other forms of media that
            depict hatred, intolerance, violence, cruelty, or anything else that could
            reasonably be found to constitute hate speech or otherwise infringe upon
            the rights of others, violates applicable law, or violated our Website
            policies; (ii) incorporate the original content in movies, videos, video
            games, or any other forms of media for a commercial purpose, except to the
            limited extent that such use is expressly permitted by these Terms or
            solely for the purchaser’s personal, non-commercial use; (iii) distribute
            for commercial gain, or otherwise commercialize merchandise that includes,
            contains, or consists of the original content; (iv) attempt to trademark,
            copyright, or otherwise acquire additional intellectual property rights in
            or to the original content; (v) attempt to mint, tokenize, or create an
            additional cryptographic token representing the same original content; (vi)
            falsify, misrepresent, or conceal the authorship of the original content;
            (vii) otherwise utilize the original content for the purchaser’s or any
            third party’s commercial benefit; (viii) alter, transform, modify, extract
            or make derivative works of the original content; (ix) create, market, or
            sell any fractionalized interest in the NFT or original content or (x)
            disable or circumvent any security features implemented in connection with
            the NFT and original content. Some NFTs may contain third-party
            intellectual property. You hereby acknowledge that these Terms only permit
            purchasers of an NFT to use any embedded third-party intellectual property
            to the extent that it is included in such NFT. Owners or licensors of any
            such third-party rights shall have the right to enforce their intellectual
            property rights against you. All rights granted herein will immediately
            terminate if you breach any of these Terms or no longer possesses the NFT
            for any reason.
          </p>
          <p>
            C. We reserve the right to cease offering any NFT at any time, at our sole
            discretion. You acknowledge and agree that, in the event we cease offering
            an NFT, we may remove or dissociate original content or third-party
            intellectual property from the NFT, revoke your license granted herein to
            display original content or third-party intellectual property underlying
            the NFT, or otherwise limit access to and use of original content or
            third-party intellectual property underlying the NFT. We will make
            commercially reasonable efforts to notify you if any NFTs in your crypto
            wallet will be affected by such changes to NFT availability.
          </p>
          <p>
            D. An NFT may include an underlying work that is licensed from a third
            party (e.g., a photographer or an artist, the “Third Party Licensor”) and
            that Third Party Licensor may display, license, distribute, and/or create a
            derivative work of the underlying work in connection with an unrelated
            non-fungible token or otherwise at a later date.
          </p>
          <p>
            E.
            <u>
              Once you sell an NFT, the licenses granted to you under these Terms
              with respect to the associated NFT shall terminate. Notwithstanding the
              foregoing, you may not be able to resell your NFTs, and no
              representations are made as to the resaleability of any NFTs.
            </u>
          </p>
          <p>
            F. <u>National Geographic Notice</u>. NATIONAL GEOGRAPHIC and Yellow Border
            Design are trademarks of National Geographic Society, used under license,
            and © National Geographic Partners, LLC.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>17. Disclaimers</strong>
          </h3>
          <p>
            A. You acknowledge and agree that NFTs offered through the Services are
            intended for personal enjoyment and we make no promises as to the financial
            value of any NFT or whether that financial value will change over time.
            NFTs are intended and offered solely for entertainment or consumptive
            purposes and not intended or suitable for investment, speculation, or
            financial gain. NFTs are not securities as defined under the federal and/or
            state securities laws and regulations of the United States.
          </p>
          <p>
            B. THE SERVICES, AND THE WEBSITE AND THE CONTENT, MATERIALS, INFORMATION,
            SERVICES, AND PRODUCTS DESCRIBED AND/OR OFFERED FOR SALE ON THE WEBSITE,
            INCLUDING, WITHOUT LIMITATION, TEXT, GRAPHICS, VIDEOS, AND LINKS, ARE
            PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND WITHOUT WARRANTIES OF
            ANY KIND, WHETHER STATUTORY OR IMPLIED OTHER THAN AS EXPRESSLY STATED
            HEREIN. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE
            DISCLAIM ALL STATUTORY AND IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
            TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS, AND
            WARRANTIES ARISING FROM COURSE OF DEALING, OR COURSE OF PERFORMANCE OR
            USAGE OF TRADE. WE DO NOT REPRESENT OR WARRANT THAT THE FUNCTIONS CONTAINED
            IN THE WEBSITE OR RELATED TO THE SERVICES WILL BE UNINTERRUPTED OR
            ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR RELATED
            TO THE SERVICES OR THE SERVER THAT ENABLES THE SERVICES TO BE AVAILABLE ARE
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT MAKE ANY WARRANTIES
            OR REPRESENTATIONS REGARDING THE USE OF THE CONTENT ON THE WEBSITE IN TERMS
            OF ITS COMPLETENESS, CORRECTNESS, ACCURACY, ADEQUACY, USEFULNESS,
            TIMELINESS, RELIABILITY OR OTHERWISE. DEPENDING ON THE STATE IN WHICH YOU
            RESIDE SOME OR ALL OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. WE ARE
            NOT RESPONSIBLE FOR THE ACTIONS OR INFORMATION OF THIRD PARTIES, AND YOU
            RELEASE US FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF
            OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST ANY SUCH THIRD
            PARTIES.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>18. Limitation of Liability</strong>
          </h3>
          <p>
            A. WE SHALL NOT BE LIABLE FOR ANY DAMAGES YOU OR ANY OTHER PERSON OR
            COMPANY MAY SUFFER. NOTWITHSTANDING THE FOREGOING, YOU AGREE THAT IN NO
            EVENT WILL WE BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT,
            INCIDENTAL, PUNITIVE, SPECIAL, OR OTHER CONSEQUENTIAL DAMAGES (INCLUDING,
            WITHOUT LIMITATION, LOST PROFITS AND DAMAGES RELATED TO CORRUPTION OR
            DELETION OF THE WEBSITE) ARISING OUT OF OR IN RELATION TO THIS AGREEMENT OR
            YOUR USE OR INABILITY TO USE THE SERVICE (INCLUDING, BUT NOT LIMITED TO,
            INOPERABILITY OF OUR OR OUR CONTRACTORS’ SERVERS), REGARDLESS OF THE FORM
            OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE,
            EVEN IF WE HAVE BEEN ADVISED OF, KNEW, OR SHOULD HAVE KNOW OF THE
            POSSIBILITY OF SUCH DAMAGES AND EVEN IF DIRECT DAMAGES DO NOT SATISFY A
            REMEDY. THIS INCLUDES, BUT IS NOT LIMITED TO, ANY ACTION TAKEN IN
            CONNECTION WITH AN INVESTIGATION BY US OR LAW ENFORCEMENT AUTHORITIES
            REGARDING YOUR OR ANY THIRD PARTY’S USE OF THE WEBSITE, ANY LOSS THAT MAY
            OCCUR DUE TO ANY LOSS OF THE SERVICE, THE USE OF THE WEBSITE OR THE
            SERVICE, ACCESS DELAYS OR ACCESS INTERRUPTIONS TO THE WEBSITE OR THE
            SERVICE, THE NON-DELIVERY OR MIS-DELIVERY OF DATA BETWEEN YOU AND US,
            EVENTS BEYOND OUR REASONABLE CONTROL, THE NON-RECOGNITION OF OUR HOSTING
            SERVERS, THE PROTECTION OR PRIVACY OF ELECTRONIC MAIL OR OTHER INFORMATION
            TRANSFERRED THROUGH THE INTERNET OR ANY OTHER NETWORK PROVIDER OR SERVICE
            ITS CUSTOMERS MAY UTILIZE, OR THE APPLICATION OF ANY POLICY SET FORTH
            HEREIN.
          </p>
          <p>
            B. YOU ACKNOWLEDGE AND AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY
            DISPUTE WITH US, OUR OWNERS, SUBSIDIARIES, DIRECTORS, EMPLOYEES,
            AFFILIATES, AGENTS, REPRESENTATIVES, AND LICENSORS ARISING OUT OF OR
            RELATING TO THE WEBSITE, SERVICE, OR ANY USER CONTENT IS TO STOP USING THE
            WEBSITE AND THE SERVICES, AND TO CANCEL YOUR ACCOUNT. YOU ACKNOWLEDGE AND
            AGREE THAT WE, OUR OWNERS, SUBSIDIARIES, DIRECTORS, EMPLOYEES, AFFILIATES,
            AGENTS, REPRESENTATIVES, AND LICENSORS ARE NOT LIABLE FOR ANY ACT OR
            FAILURE TO ACT BY THEM OR ANY OTHER PERSON OR COMPANY REGARDING CONDUCT,
            COMMUNICATION OR CONTENT ON THE WEBSITE. IN NO CASE SHALL THE TOTAL
            AGGREGATE LIABILITY OF US, OUR OWNERS, SUBSIDIARIES, DIRECTORS, EMPLOYEES,
            AFFILIATES, AGENTS, REPRESENTATIVES, AND LICENSORS TO YOU EXCEED THE
            GREATER OF THE AMOUNT THAT YOU PAID TO US FOR THE SERVICE WITHIN THE SIX
            MONTHS IMMEDIATELY PRIOR TO THE CLAIM ARISING, OR ONE HUNDRED DOLLARS
            (US$100).
          </p>
          <p>
            <u>
              C. Exceptions by Some States or Countries on Non-Allowance of Exclusion
            </u>
            .
          </p>
          <p>
            i. SOME STATES DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE
            ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. HOWEVER, SOME STATES DO NOT ALLOW
            LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION
            MAY NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS, AND
            YOU MAY HAVE OTHER RIGHTS THAT VARY FROM STATE TO STATE.
          </p>
          <p>
            <strong>ii. NOTICE TO CALIFORNIA RESIDENTS:</strong>
            IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE §1542,
            WHICH SAYS: A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR
            DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF
            EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY
            AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>19. Indemnification</strong>
          </h3>
          <p>
            A. By utilizing the Website or the Service you agree to indemnify and hold
            us and our officers, directors, employees, agents, and affiliates harmless
            from and against any and all liability, losses, costs, and expenses
            (including attorneys’ fees) incurred by us through your use of the Website
            or the Services or your posting or submission of User Content (if
            permitted) in violation of these Terms (including, but not limited to,
            negligent or wrongful conduct, infringement of any third party’s
            intellectual property, confidentiality, privacy or publicity rights). We
            reserve the right, at our own expense, to assume the exclusive defense and
            control of any matter otherwise subject to indemnification by you, and in
            such case, you agree to cooperate with our defense of such claim. This
            section shall survive any termination of the Terms.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>
              20. Cooperation with Law Enforcement and Government Agencies; Required
              Disclosures
            </strong>
          </h3>
          <p>
            A. You acknowledge that we have the right to investigate and prosecute
            violations of these Terms, including intellectual property, publicity and
            privacy rights infringement and website security issues, to the fullest
            extent of the law. We may involve and cooperate with law enforcement
            authorities in prosecuting users who violate these Terms. You acknowledge
            that we have no obligation to monitor your access to or use of the Website
            or the Services, but we have the right to do so for the purpose of
            operating the Website, to ensure your compliance with these Terms or to
            comply with applicable law or the order or requirement of a court,
            administrative agency or other governmental or regulatory body.
          </p>
          <p>
            B. You understand and agree that we may disclose your Personal Information
            if required to do so by law, court order, legal process, or subpoena,
            including to respond to any government or regulatory request (after, if
            permitted, giving reasonable notice to you and using commercially
            reasonable efforts to provide you with the opportunity to seek a protective
            order or the equivalent (at your expense), or if we believe that such
            action is necessary to (a) conform to the law, comply with legal process
            served on us or our affiliates or partners, or investigate, prevent, or
            take action regarding suspected or actual illegal activities; (b) to
            enforce these Terms (including for billing and collection purposes), take
            precautions against liability, to investigate and defend ourselves against
            any third-party claims or allegations, to assist government enforcement
            agencies, or to protect the security or integrity of our Website; or, (c)
            to exercise or protect the rights, property, or the safety of us, our users
            or others.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>21. Dispute Resolution</strong>
          </h3>
          <p>
            A. <u>Time Limitation</u>. Any claim or action against us must be brought
            within twelve (12) months of the cause arising, otherwise such claim or
            action is permanently barred.
          </p>
          <p>
            <strong>B. </strong>
            <strong><u>MANDATORY BINDING ARBITRATION</u></strong>
          </p>
          <p>
            i. Other than for the grounds set forth in Section 21.C (labeled
            “Exceptions to Agreement to Arbitrate”), in the event of any dispute,
            claim, question or disagreement arising from or relating to the Terms or
            the breach thereof, the NFTs offered through the Services, or the access or
            use of the Website or our Services, the parties hereto shall use reasonable
            efforts to settle the dispute, claim, question, or disagreement. To this
            effect, the parties shall consult and negotiate with each other in good
            faith and, recognizing their mutual interests, attempt to reach a just and
            equitable solution satisfactory to both parties. If the parties do not
            reach such solution within a period of thirty (30) days, then, upon notice
            by either party to the other, such dispute, claim, question or disagreement
            shall be resolved by binding arbitration in Los Angeles, California in
            accordance with the Commercial Arbitration Rules of the American
            Arbitration Association (the “<strong>AAA</strong>”), subject to the
            limitations of this Section. This agreement to arbitrate will be
            specifically enforceable under the prevailing law of any court having
            jurisdiction. Notice of a demand for arbitration shall be filed in writing
            with the other party hereto and with the AAA. The demand for arbitration
            shall be made within a reasonable time after the dispute has arisen, and in
            no event shall any such demand be made after the date when institution of
            legal or equitable proceedings based on such dispute would be barred by the
            applicable statute of limitations. The parties agree that one (1)
            arbitrator shall arbitrate the dispute. The arbitrator shall be selected by
            the joint agreement of the parties, but if they do not so agree within
            twenty (20) days after the date of the notice of a demand for arbitration
            referred to above, the selection shall be made pursuant to the Commercial
            Arbitration Rules of the AAA from the panels of business arbitrators
            maintained by the AAA. The decision of the arbitrator shall be made in
            writing and shall be final. Judgment may be entered upon it in any court
            having jurisdiction thereof, and the decision shall not be subject to
            vacation, modification or appeal, except to the extent permitted by
            Sections 10 and 11 of the Federal Arbitration Act, the terms of which
            Sections the parties agree shall apply. The expenses of arbitration,
            including and the fees and expenses of the arbitrator and the AAA, shall be
            shared equally by the parties.
          </p>
          <p>
            ii. The arbitrator will have no authority to award attorneys’ fees,
            punitive damages, or any other monetary relief not measured by the
            prevailing party’s actual damages and each party irrevocably waives any
            claim thereto. The award may include equitable relief. The arbitrator will
            not make any ruling, finding, or award that does not otherwise conform to
            the Terms. The arbitrator may render a summary disposition relative to all
            or some of the issues, provided that the responding party has had an
            adequate opportunity to respond to any such application for such
            disposition.
          </p>
          <p>
            iii. The parties agree to treat all aspects of the arbitration as
            confidential, as provided in the AAA Rules. Before making any disclosure
            permitted by the Rules, a party shall give written notice to the other
            party and afford such party a reasonable opportunity to protect its
            interests. Further, judgment on the arbitrators’ award may be entered in
            any court having jurisdiction.
          </p>
          <p>
            C. <u>Exceptions to Agreement to Arbitrate</u>. You and we agree that we
            may bypass arbitration and go to court to resolve disputes relating to: (a)
            your or our intellectual property (e.g., trademarks, trade dress, domain
            names, trade secrets, copyrights or patents), or (b) your violation of our
            User Content Posting Guidelines.
          </p>
          <p>
            <strong>D. </strong>
            <strong><u>Class Action Waiver</u></strong>
            <strong>
              . Any proceedings to resolve or litigate any dispute in any forum will
              be conducted solely on an individual basis. You agree that neither you
              nor we will seek to have any dispute heard as a class action or in any
              other proceeding in which either party acts or proposes to act in a
              representative capacity, and each party hereby waives any right to
              assert consolidated claims with respect to any disputes subject to
              arbitration under these Terms or any disputes between the parties. No
              arbitration or proceeding will be combined with another without the
              prior written consent of all parties to all affected arbitrations or
              proceedings.
            </strong>
          </p>
          <p>
            <strong>E. </strong>
            <strong><u>Waiver of Jury Trial</u></strong>
            <strong>
              . Each party irrevocably and unconditionally waives any right we or you
              may have to a trial by jury for any legal action arising out of or
              relating to these Terms or the transactions contemplated hereby.
            </strong>
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>22. Location of Operation</strong>
          </h3>
          <p>
            Our Website is operated in the United States of America, and we make no
            representation that content provided is applicable or appropriate for use
            in other locations. We make no claims that the Website or any of its
            content is accessible or appropriate outside of the United States. Access
            to the Website may not be legal by certain persons or in certain countries.
            If you access the Website from outside the United States, you do so on your
            own initiative and are responsible for compliance with local laws. Your use
            of the Website does not subject us to judicial process in or to the
            jurisdiction of courts or other tribunals in your jurisdiction or location.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>23. Communications/Notice</strong>
          </h3>
          <p>
            A. By creating a User account or giving us any contact or other
            information, you agree to and do hereby consent to receive mail and
            electronic communications (email, text/SMS and by telephone) from us and/or
            by posting the communications on the Website (e.g., by posting notices on
            your account profile page) concerning information and/or our Services
            (collectively, “<strong>Communications</strong>”). For Users with an
            account, Communications may be those that we are required to send to you by
            law (e.g., data security incident notifications) concerning us, your
            account or information, the Website, or the Services (“    <strong>Required Communications</strong>”). The Communications may also be
            those that we send to you for other reasons. You may change the email or
            mobile phone number on file for your account by visiting your account
            profile page or by contacting us. You may opt out of receiving all
            Communications, other than Required Communications, via email by sending a
            notice to us that identifies your full name, user name and email address;
            however, you will not receive any further electronic notices from us (other
            than Required Communications), which notices may include important notices
            or announcements.
          </p>
          <h3 className="font-poppins text-lg font-normal mt-8 mb-2">
            <strong>24. General</strong>
          </h3>
          <p>
            A. <u>Governing Law</u>. For all legal proceedings arising out of use of
            the Website, the Services, and/or relating to these Terms, these Terms and
            the relationship between you and us shall, irrespective of any choice of
            laws rules, be governed by and construed in accordance with the laws of the
            State of California. You understand and agree that your use of the Website
            and the Service as contemplated by these Terms shall be deemed to have
            occurred in the state of California. To the extent litigation is permitted
            pursuant to these Terms, you and we hereby irrevocably and unconditionally
            submit to the jurisdiction of courts located in Los Angeles, California or
            the court of competent jurisdiction closest thereto if no court of
            competent jurisdiction resides therein, and the parties consent to the
            personal jurisdiction of such courts and expressly waive any right they may
            otherwise have to cause any such action or proceeding to be brought or
            tried elsewhere. You and we irrevocably waive, to the fullest extent
            permitted by law, any objection that you may now or hereafter have to the
            laying of the venue of any proceeding brought in any such court or any
            claim that a legal proceeding commenced in such court has been brought in
            an inconvenient forum.
          </p>
          <p>
            B. <u>Assignment</u>. You may not assign, convey, or transfer (whether by
            contract, merger or operation of law) (collectively, “assign” or variants)
            these Terms, in whole or in part, without our prior written consent, which
            may be granted or withheld by us in our sole discretion. Any attempted
            assignment in violation of these Terms will be of no power or effect. We
            may assign these Terms freely at any time without notice. Subject to the
            foregoing, these Terms will bind and inure to the benefit of each party’s
            permitted successors and assigns. We reserve the right to, and you hereby
            consent to, our right to disclose, transfer, and/or assign your Personal
            Information in connection with a merger, consolidation, restructuring,
            financing, sale, or other transaction or pursuant to any court proceeding.
            In addition, if a potential buyer is interested in purchasing us, you agree
            that we may provide the potential buyer with your Personal Information on a
            confidential basis and subject to the use restrictions in these Terms.
          </p>
          <p>
            C. <u>Agreement</u>. These Terms, including, the Privacy Policy and any
            other terms agreed to by way of your express consent or your use of the
            Website or the Services shall constitute the entire and exclusive
            understanding and agreement between you and us regarding this subject
            matter, and shall supersede any and all prior or contemporaneous
            representations or understandings relating to this subject matter. In the
            event that any part of these Terms is held to be invalid or unenforceable,
            the unenforceable part shall be given effect to the greatest extent
            possible and the remaining parts will remain in full force and effect. Upon
            termination of these Terms, any provision which, by its nature or express
            terms should survive, will survive such termination or expiration. The
            failure of us to exercise or enforce any right or provision of these Terms,
            including any failure to act with respect to a breach, will not constitute
            a waiver of such right or our right to act with respect to subsequent or
            similar breaches. The headings of sections and paragraphs in these Terms
            are for convenience only and shall not affect its interpretation.
          </p>
          <p>
            D. <u>Relationship of the Parties</u>. The parties intend that no
            partnership, joint venture, employee, employer or other relationship is
            intended or will be created by these Terms. You agree not to hold yourself
            out as in any way sponsored by, affiliated with, endorsed by, in
            partnership or venture with, nor as an employee or employer of us, any of
            our affiliates or respective service providers. There are no third-party
            beneficiaries to these Terms.
          </p>
          <p>
            E. <u>Notices</u>. You agree that we may provide you with notices,
            including those regarding changes to these Terms, by email to the address
            you provided at the time of registration or such changed address as you
            provide to us in your account data. Our address for notices is set for the
            below.
          </p>
          <p>
            F. <u>Contact Us</u>. Our contact information is: Snowcrash, Inc., 5450 W.
            Washington Blvd, Los Angeles, CA 90016; Email:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://info@snowcrash.com/"
            >
              <u>info@snowcrash.com</u>
            </a>
            . You may also visit our “Contact Us” website page at
            <a target="_blank" rel="noopener noreferrer" href="https://snowcrash.com/">
              <u>https://snowcrash.com/</u>
            </a>
            .
          </p>

        </div>
      </div>
    </Scaffold>
  );
};

export default Terms;
