export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "K.A.",
	description: "Personal Profile",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
	{
		label: "About",
		href: "/about",
	  },
   
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/KostuX",
		twitter: "https://www.facebook.com/KostuX/",
		docs: "https://nextui.org",
		discord: "https://discord.gg/549160892965847042",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
