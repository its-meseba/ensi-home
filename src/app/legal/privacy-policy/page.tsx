'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const formatText = (text: string) => {
    const boldParts = text.split(/(\*\*.*?\*\*)/g);

    return boldParts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={`bold-${index}`}
            className="font-semibold text-gray-900 dark:text-gray-100"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }

      const emailRegex = /\[([^\]]+)\]\(mailto:([^)]+)\)/g;
      const parts = part.split(emailRegex);

      if (parts.length > 1) {
        return parts.map((subPart, subIndex) => {
          if (subPart === parts[1]) {
            return (
              <Link
                key={`email-${index}-${subIndex}`}
                href={`mailto:${parts[2]}`}
                className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Mail className="mr-1 size-4" />
                {subPart}
              </Link>
            );
          }
          return subPart;
        });
      }

      return part;
    });
  };

  const sections = [
    {
      title: 'Privacy Policy',
      content: `This privacy policy applies to the Ensi Home app (hereby referred to as "Application") for mobile devices that was created by Solace Teknoloji Inc. (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".`,
    },
    {
      title: 'Information Collection and Use',
      content: `The Application collects information when you download and use it. This information may include:
      
- **Your device's Internet Protocol address** (e.g., IP address)
- **The pages of the Application that you visit**, the time and date of your visit, the time spent on those pages
- **The time spent on the Application**
- **The operating system you use on your mobile device**

**Location Data Collection:**
The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of it in the following ways:

- **Geolocation Services:** The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
- **Analytics and Improvements:** Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
- **Third-Party Services:** Periodically, the Service Provider may transmit anonymized location data to external services, assisting them in enhancing the Application and optimizing their offerings.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.

For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information, including but not limited to Email, Name, Phone Number, UserId, and Usage Data. The information that the Service Provider requests will be retained by them and used as described in this privacy policy.`,
    },
    {
      title: 'Third Party Access',
      content: `Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.

**The Service Provider may disclose User Provided and Automatically Collected Information:**

- **As required by law**, such as to comply with a subpoena or similar legal process.
- **When they believe in good faith that disclosure is necessary** to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
- **With their trusted service providers** who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.`,
    },
    {
      title: 'Opt-Out Rights',
      content: `You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.`,
    },
    {
      title: 'Data Retention Policy',
      content: `The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at [solace@solace.com.tr](mailto:solace@solace.com.tr) and they will respond in a reasonable time.`,
    },
    {
      title: 'Children',
      content: `The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

The Service Provider does not knowingly collect personally identifiable information from children. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact us at [solace@solace.com.tr](mailto:solace@solace.com.tr).`,
    },
    {
      title: 'Security',
      content: `The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.`,
    },
    {
      title: 'Changes',
      content: `This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.

**This privacy policy is effective as of 2024-01-01**`,
    },
    {
      title: 'Your Consent',
      content: `By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.`,
    },
    {
      title: 'Contact Us',
      content: `If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us at [solace@solace.com.tr](mailto:solace@solace.com.tr).`,
    },
  ];

  return (
    <div className="container mx-auto mt-24 min-h-screen px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-4 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="mb-12 text-center text-gray-500 dark:text-gray-400">
          Last updated: {new Date('2024-01-01').toLocaleDateString()}
        </p>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border transition-shadow duration-300 hover:shadow-md">
                <CardHeader className="border-border bg-background border-b">
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {section.content.split('\n').map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                      {formatText(paragraph)}
                    </p>
                  ))}
                </CardContent>
              </Card>
              {index < sections.length - 1 && (
                <Separator className="bg-border my-8" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
