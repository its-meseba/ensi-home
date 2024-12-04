import * as m from '@/paraglide/messages';

export const routes = {
  solutions: [
    { path: '/ensi-home/box', messageKey: 'navbar_solutions_ensiBox' },
    {
      path: '/ensi-home/mobile-application',
      messageKey: 'navbar_solutions_ensiMobileApp',
    },
    {
      path: '/ensi-home/ai-voice-assistant',
      messageKey: 'navbar_solutions_ensiVoiceAssistant',
    },
    { path: '/ensi-home/cloud', messageKey: 'navbar_solutions_cloud' },
    {
      path: '/ensi-home/smart-life-areas',
      messageKey: 'navbar_solutions_smartLiving',
    },
    {
      path: '/ensi-home/compatible-smart-devices',
      messageKey: 'navbar_solutions_supportedDevices',
    },
  ],
  knowledgeBase: [
    { path: '/knowledge-base/faq', messageKey: 'navbar_knowledgeBase_faq' },
    {
      path: '/knowledge-base/contact',
      messageKey: 'navbar_knowledgeBase_contact',
    },
    {
      path: '/knowledge-base/how-it-is-done',
      messageKey: 'navbar_howItIsDone',
    },
  ],
};

export function getLocalizedRoutes(locale: string) {
  const allRoutes = [...routes.solutions, ...routes.knowledgeBase];
  return allRoutes.map((route) => ({
    path: `/${locale}${route.path}`,
    title: m[route.messageKey](),
  }));
}
