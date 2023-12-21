import React from 'react'
import styles from '../style'
import Navbar from './home/Navbar'
import Footer from './home/Footer'

export default function Privacy() {

    const privacySections = [
        {
          title: 'Introduction & Acceptance',
          content: [
            'We are strongly committed to protecting the privacy of your personal and confidential information. The policies below are applicable to the website services (the “Services”) provided and maintained by Miramedia Retail Inc. on the website www.flexibleit.net (the “Website”) and any other websites operated by us under the FlexibleIt brand (collectively, "FlexibleIt," the "Company," "we," "us," or "our"). The use of information collected through our technology shall be limited to the purpose of providing the services for which FlexibleIt’s customers (each, a "Client") have engaged it and to provide promotional information (advertisements) that may be of interest to you. We have established this privacy policy ("Privacy Policy") to let you know the kinds of personal information we may gather during your use of the Services, why we gather your information, what we use your personal information for, when we might disclose your personal information, and how you can manage your personal information. It also describes your choices regarding use, access and correction of your personal information. Please be advised that the practices described in this Privacy Policy apply only to information gathered online by us when you access the Services, when you sign up to use our Services, and when you provide information or content to us. It does not apply to information that you may submit to us offline such as physical correspondence. By using our Services, you are accepting the practices described in our Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Services. If you have any questions about this Privacy Policy or don’t see your concerns addressed here, you should contact us by email at privacy@flexibleit.net.',
          ]
        },
        {
          title: 'What Information About Me Is Collected and Stored?',
          content: [
            'FlexibleIt adheres to the applicable standards of ethical practices in all of our operations and is dedicated to protecting the privacy of all Clients.Our Privacy Policy is simple - Except as disclosed below, we do not sell, barter, give away transfer or rent your personal information to any company  person or organization outside of FlexibleIt.',
          ]
        },
        {
          title: 'Personal Information',
          content: [
            'For purposes of registration and use of our Services, we collect identifiable information about you such as your name, email address, location, profile pictures, biographical information and any information provided by social media sites that you have used to sign-up with or use the Services (collectively referred to as "Personal Information"). This is information that you directly provide to us or give us access to via social media websites.  We also collect and store information that you that you provide through our help desk, customer service representatives or requests for more information. For campaign purposes in which you explicitly choose to participate, we may collect shipping information so that you can receive products and services.',
          ]
        },
        {
          title: 'Passive Collection',
          content: [
            'As is true of most such Services, we gather certain information automatically and store it in log files. This information may include Internet protocol (IP) addresses, browser type, device type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, Mac address and clickstream data. We may combine this automatically collected log information with other information we collect about you. We do this to improve the services we offer you.',
          ]
        },
        {
          title: 'How We Use Your Information?',
          content: [
            'We use the information we learn from you to help us personalize and continually improve your experience with the Services. We use the information to fulfill support requests, deliver products and services, communicate with you about products, services, promotional offers, update our records and generally maintain your accounts with us. We also use this information to enable third parties to carry out technical, logistical or other functions on our behalf. Except as disclosed in this Privacy Policy, we do not use or disclose information about your individual visits/use of our Services or your Personal Information collected online to any companies not affiliated with us',
          ]
        },
        {
          title: 'What Information About Me Is Collected and Stored?',
          content: [
            'FlexibleIt adheres to the applicable standards of ethical practices in all of our operations and is dedicated to protecting the privacy of all Clients.Our Privacy Policy is simple - Except as disclosed below, we do not sell, barter, give away transfer or rent your personal information to any company  person or organization outside of FlexibleIt.',
          ]
        },
        {
          title: 'Customer Service and Feedback',
          content: [
            'We may use your Personal Information to fulfill support requests, provide customer service/support, track your compliance with the Company’s use policies, or for feedback purposes.',
          ]
        },
        {
          title: 'Use of Passive Information',
          content: [
            'We use Passive Information to help us determine how people use the Services and who our users are so we can improve our Services and ensure that they are as appealing as we can make it for as many people as possible.',
          ]
        },
        {
          title: 'Third-Party Agents',
          content: [
            'We occasionally have third party agents, subsidiaries, affiliates and partners that perform functions on our behalf, such as marketing, analytics, cloud storage and data processing, providing customer service/support, fraud protection, etc. These entities have access to the Personal Information needed to perform their functions and are contractually obligated to maintain the confidentiality and security of that Personal Information. We choose these entities carefully, and to the best of our ability ensure that they adhere to this Privacy Policy, our ethical standards and have appropriate technology safeguards in place to secure your Personal Information.  They are restricted from using, selling, distributing or altering this data in any way other than to provide the requested services to Company.',
          ]
        },
        {
          title: 'Emergency Situations',
          content: [
            'In certain situations, we may be required to disclose personal data in response to lawful requests by public authorities, including to meet national security or law enforcement requirements. We may also use or disclose Personal Information if required to do so by law or in the good-faith belief that such action is necessary to (a) conform to applicable law or comply with legal process served on us or the Website; (b) protect and defend our rights or property, the Website or our users, and act under emergency circumstances to protect the personal safety of us, our affiliates, agents, or the users of the Website or the public, or respond to a government request. We do not sell your Personal Information to third parties.',
          ]
        },
        {
          title: 'What Steps Are Taken To Keep Personal Information Secure?',
          content: [
            'We are concerned with the security of the Personal Information associated with you. We have implemented commercially reasonable measures to prevent unauthorized access to your Personal Information. These measures include policies, procedures, employee training, physical access and technical measures relating to data access controls. In addition, we use standard security protocols and mechanisms such as secure socket layer technology (SSL) in the transmission of certain sensitive Personal Information, such as credit card information and login credentials. While we try our best to safeguard your Personal Information once we receive it, no transmission of data over the Internet or any other public network can be guaranteed to be 100% secure. If you have any questions about security on our Website, feel free to contact us.',
          ]
        },
        {
          title: 'Data Retention',
          content: [
            'We comply with the following data retention policies with respect to your Personal Information: (1) we retain the information that is supplied when you sign-up for and use the Services; (2) we retain information collected passively when you access the Services; and (3) we may retain your support emails, web logs and accounting logs, though we reserve the right to destroy such information after a period of six months. The Company will retain Personal Information we process on behalf of our Clients for as long as needed to provide services to each Client.  Also, we will retain and use your Personal Information as necessary to comply with our legal obligations, resolve disputes and enforce our agreements. Please contact us if you wish to request that we no longer use your Personal Information to provide you services.',
          ]
        },
        {
          title: 'Changes to This Policy',
          content: [
            'We may update this Privacy Policy to reflect changes to our information practices. If we make any material changes we will notify you by email (sent to the email address specified in your account) or by means of a notice on this Website prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.',
          ]
        },
        {
          title: 'Your Obligations to Keep Your Access Rights Secure',
          content: [
            'You promise to: (a) provide true, accurate, current and complete information about yourself when you sign-up (the “Registration Data”) to use the Services and (b) maintain and promptly update the Registration Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or the Company has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, the Company has the right to suspend or terminate your account and refuse any and all current or future use of the Services. You are entirely responsible for the security and confidentiality of your password and account. Furthermore, you are entirely responsible for any and all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security of which you become aware. You are responsible for taking precautions and providing security measures best suited for your situation and intended use of the Services. Please note that anyone able to provide your Personal Information may be able access your account so you should take reasonable steps to protect this information. Upon request the Company will provide you with information about whether we hold any of your Personal Information. If your Personal Information changes, or you wish to deactivate your account, you may correct, delete inaccuracies, or deactivate your account on the Website. We will respond to your change request within a reasonable timeframe.',
          ]
        },
        {
          title: 'What Happens When I Link To or From Another Web Site?',
          content: [
            'Our Services allow you to link to websites operated by affiliates of the Company or third parties. Please be advised that the practices described in this Privacy Policy for the Company do not apply to information gathered through these other websites. These other sites may also send their own cookies to you, collect your data or solicit your Personal Information. Always be aware of all websites you visit. We are not responsible for the actions and privacy policies of third parties and other websites. We encourage you to be aware of when you leave this Website and read the privacy policies of each and every website that you visit.',
          ]
        },
        {
          title: 'Testimonials',
          content: [
            'We may display personal testimonials of satisfied customers on our site in addition to other endorsements. With your consent we may post your testimonial along with your name. If you wish to update or delete your testimonial, please contact us.',
          ]
        },
        {
          title: 'Jurisdictions',
          content: [
            'We make every effort to protect the Personal Information of all users of the Website. The Service shall be deemed solely based in Ontario, Canada.  We attempt to comply with all applicable data protection and consumer rights laws in Ontario, Canada, and the applicable federal laws of Canada therein. If you are uncertain whether this Privacy Policy conflicts with the applicable local privacy laws where you are located, you should not submit your Personal Information to us or you may contact us with any questions. You agree that: (i) the Service shall be deemed solely based in Ontario, Canada; and (ii) the Service shall be deemed a website that does not give rise to personal jurisdiction over FlexibleIt, either specific or general, in jurisdictions other than Ontario. These Terms of Service shall be governed by the internal laws of the Province of Ontario, without respect to its conflict of laws principles. Any claim or dispute between you and FlexibleIt that arises in whole or in part from the Service shall be decided exclusively by a court of competent jurisdiction located in Ontario. These Terms of Service, together with the Privacy Notice at https://www.flexibleit.net/privacy-policy and any other legal notices published by FlexibleIt on the Service, shall constitute the entire agreement between you and FlexibleIt concerning the Service.',
          ]
        },
        {
          title: 'Corporate Ownership',
          content: [
            'We may change ownership or corporate organization while providing the Services. As a result, please be aware that we may transfer your information to another company that is affiliated with us or with which we have merged or by which we have been acquired. Under such circumstances, the Company would to the extent possible require the acquiring party to follow the practices described in this Privacy Policy, as it may be amended from time to time. You will be notified via email and/or a prominent notice on our Website of any change in ownership or uses of your Personal Information, as well as any choices you may have regarding your Personal Information.',
          ]
        },
        {
          title: 'How Do I Opt-Out?',
          content: [
            'You may always opt-out of receiving future email messages and newsletters from the Company. We provide you with the opportunity to opt-out of receiving communications from us by following the unsubscribe link located at the bottom of each communication.',
          ]
        },
        {
          title: 'Contacting Us',
          content: [
            'If you have any questions about this Privacy Policy, you can contact us at flexibleit@gmail.com. Dated: February 04, 2023',
          ]
        },
      ];

  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
        </div>
        <div className='text-center p-9'>
            <h3 className="text-4xl">Privacy Policy</h3>
        </div>
        <section className="privacy-body-section pb-20">
            <div className="container">
                <div className="privacy-body card">
                
                    {privacySections.map((section, index) => (
                        <div className="single-privacy pl-48" key={index}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{section.title}</h4>
                            {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} style={{ marginBottom: '15px' }}>{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
        </div>
    </div>
  )
}
