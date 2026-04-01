import { Home, User, Contact, Gift, Wallet, Users, Building } from "lucide-react";

export const navLinks = [
    {
        href: "/product",
        label: "Product",
        icon: <Gift />,
    },
    {
        href: "/pricing",
        label: "Pricing",
        icon: <Wallet />,
    },
    {
        href: "/community",
        label: "Community",
        icon: <Users />,
    },
    {
        href: "/enterprise",
        label: "Enterprise",
        icon: <Building />,
    },
]