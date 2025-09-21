import { Page, type ServicePrice } from '$lib/types/types';
import {
    Stethoscope,
    Syringe,
    ScanFace,
    HeartPulse,
    Bone,
    Scissors,
    ClipboardList,
    HeartHandshake, Home, Activity, AlertTriangle, ShieldCheck
} from 'lucide-svelte';

import type { Icon as LucideIcon } from 'lucide-svelte'; // <-- type for any lucide icon component

// Use the actual component type exported by lucide-svelte
type IconType = typeof LucideIcon;

export const CLINIC_NAME = 'Dr. Mozahid Veterinary Clinic';
export const APPOINTMENT_PHONE = '+880-1716297665';
export const ADDRESS =
    'H#97/108, R#7/1, Block#B, South Banasre, Khilgaon, Dhaka-1219';

export const navLinks = [
    { name: 'Home', page: Page.Home },
    { name: 'About Us', page: Page.About },
    { name: 'Services', page: Page.Services },
    { name: 'Pricing', page: Page.Pricing },
    { name: 'Book Appointment', page: Page.Appointment },
] as const;

export const servicesList: { title: string; description: string; icon: IconType }[] =
    [
        {
            title: 'Wellness Examinations',
            description: 'Routine check-ups and preventive care to keep your pet healthy.',
            icon: Stethoscope,
        },
        {
            title: 'Vaccinations',
            description: 'Essential immunizations to protect your pet from common diseases.',
            icon: Syringe,
        },
        {
            title: 'Dental Care',
            description: 'Professional dental cleanings and oral health assessments.',
            icon: ScanFace,
        },
        {
            title: 'Surgery',
            description:
                'Safe and effective surgical procedures performed with the highest standards.',
            icon: Scissors,
        },
        {
            title: 'Emergency Care',
            description:
                'Prompt and compassionate emergency services for urgent situations.',
            icon: HeartPulse,
        },
        {
            title: 'Nutritional Counseling',
            description:
                "Guidance on diet and nutrition to ensure your pet maintains a healthy weight and lifestyle.",
            icon: Bone,
        },
        {
            title: 'Grooming Services',
            description:
                "Bathing, grooming, and hygiene services for your pet's comfort and health.",
            icon: Scissors,
        },
        {
            title: 'Digital Record System',
            description: 'Modern digital system to monitor animal health and follow-ups.',
            icon: ClipboardList,
        },
    ];

export const pricingData: ServicePrice[] = [
    {
        category: 'Consultant Fee',
        items: [
            {
                particulars: 'Consultation Fees',
                largeSmallAnimal: 500,
                cat: 300,
                dog: 400,
                avianExotic: 300,
                remarks: 'BDT',
            },
            {
                particulars: 'Follow - Up',
                largeSmallAnimal: 200,
                cat: 200,
                dog: 200,
                avianExotic: 200,
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Surgery',
        items: [
            { particulars: 'Surgery (Spaying)', cat: 3000, dog: 3000, remarks: 'BDT' },
            {
                particulars: 'Surgery (Neuter)',
                cat: 2000,
                dog: 2000,
                avianExotic: 2000,
                remarks: 'BDT',
            },
            {
                particulars: 'C-Section',
                largeSmallAnimal: '5000-8000',
                cat: 4000,
                dog: 4000,
                avianExotic: 4000,
                remarks: 'BDT',
            },
            { particulars: 'Pyometra', cat: 4000, dog: 4000, avianExotic: 4000, remarks: 'BDT' },
            {
                particulars: 'Rectal/Vaginal Prolapse',
                cat: 2000,
                dog: 2000,
                avianExotic: 2000,
                remarks: 'BDT',
            },
            {
                particulars: 'Amputation',
                cat: 5000,
                dog: 5000,
                avianExotic: 5000,
                remarks: 'BDT',
            },
            { particulars: 'Upper Patteler Fixation', largeSmallAnimal: '2000-3000', remarks: 'BDT' },
            {
                particulars: 'Tumor',
                largeSmallAnimal: '3000-4000',
                cat: '3000-4000',
                dog: '3000-4000',
                avianExotic: '3000-4000',
                remarks: 'BDT',
            },
            {
                particulars: 'Abscess/Aural Haematoma',
                largeSmallAnimal: 2000,
                cat: 2000,
                dog: 2000,
                avianExotic: 2000,
                remarks: 'BDT',
            },
            {
                particulars: 'Enucleation',
                largeSmallAnimal: 4000,
                cat: 4000,
                dog: 4000,
                avianExotic: 4000,
                remarks: 'BDT',
            },
            {
                particulars: 'Wound Dressing',
                largeSmallAnimal: '500-2500',
                cat: '500-2500',
                dog: '500-2500',
                avianExotic: '500-2500',
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Vaccination',
        items: [
            { particulars: 'Rabies', cat: 300, dog: 300, avianExotic: 300, remarks: 'BDT' },
            { particulars: 'Flu/Parvo Combined', cat: '1000-1500', dog: '1000-1500', remarks: 'BDT' },
            { particulars: 'Rabies + Flu', cat: '1500-1700', dog: '1500-1700', remarks: 'BDT' },
        ],
    },
    {
        category: 'Deworming',
        items: [
            {
                particulars: 'Deworming (Inj./Tab/Syrup/Spot on)',
                cat: '300-500',
                dog: '300-500',
                avianExotic: '300-500',
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Trimming/Cleaning/Grooming/Bathing',
        items: [
            { particulars: 'Nail Trimming', cat: '200-400', dog: '200-400', avianExotic: '200-400', remarks: 'BDT' },
            { particulars: 'Ear/Eye Cleaning', cat: '300-500', dog: '300-500', avianExotic: '300-500', remarks: 'BDT' },
            { particulars: 'Grooming', cat: '500-1000', dog: '500-1000', avianExotic: '500-1000', remarks: 'BDT' },
            { particulars: 'Bathing', cat: '1000-1500', dog: '1000-1500', avianExotic: '1000-1500', remarks: 'BDT' },
        ],
    },
    {
        category: 'Nebulization',
        items: [
            {
                particulars: 'Nebulization Fee',
                largeSmallAnimal: '150-200',
                cat: '150-200',
                dog: '150-200',
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Catherization',
        items: [
            {
                particulars: 'IV Canulation',
                largeSmallAnimal: '200-300',
                cat: '200-300',
                dog: '200-300',
                avianExotic: '200-300',
                remarks: 'BDT',
            },
            {
                particulars: 'Urinary Catherization',
                cat: '300-500',
                dog: '300-500',
                avianExotic: '300-500',
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Fluid Therapy',
        items: [
            {
                particulars: 'IV Injection/Saline',
                largeSmallAnimal: '300-600',
                cat: '300-600',
                dog: '300-600',
                avianExotic: '300-600',
                remarks: 'BDT',
            },
            {
                particulars: 'Inj./Saline',
                largeSmallAnimal: '200-400',
                cat: '200-400',
                dog: '200-400',
                avianExotic: '200-400',
                remarks: 'BDT',
            },
        ],
    },
    {
        category: 'Rapid Test Kit',
        items: [{ particulars: '-', cat: '500-1000', dog: '500-1000', remarks: 'BDT' }],
    },
];


export const petImages = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721327900411-b315dce4388e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const points = [
    { text: "Personalized care tailored to each pet's unique needs", icon: HeartHandshake, colors: "from-pink-500 to-rose-400" },
    { text: "Experienced team that values the human-animal bond", icon: Stethoscope, colors: "from-blue-500 to-cyan-400" },
    { text: "Stress-free, welcoming clinic environment", icon: Home, colors: "from-green-500 to-emerald-400" },
    { text: "State-of-the-art medical equipment & facilities", icon: Activity, colors: "from-purple-500 to-violet-400" },
    { text: "Emergency care available for urgent situations", icon: AlertTriangle, colors: "from-red-500 to-orange-400" },
    { text: "Preventive health programs for long, happy lives", icon: ShieldCheck, colors: "from-yellow-500 to-amber-400" },
];