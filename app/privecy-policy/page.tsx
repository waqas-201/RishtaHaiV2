import { Shield, Lock, Eye, Users, Database } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background mt-20" >
            {/* Page Title */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
                <p className="text-muted-foreground mb-2">
                    Your privacy is sacred to us. This policy explains how we protect your personal information
                    while helping you find your perfect Islamic match in Pakistan.
                </p>
                <p className="text-sm text-muted-foreground">
                    Last updated: July 16, 2025
                </p>
            </div>



            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Introduction */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-8 border">
                    <h2 className="text-xl font-semibold text-card-foreground mb-4">Our Commitment to Your Privacy</h2>
                    <p className="text-muted-foreground mb-4">
                        At RishtaHai, we understand that finding a life partner is a deeply personal journey. This Privacy Policy
                        explains how we collect, use, and protect your information when you use our Islamic matrimonial platform.
                    </p>
                    <div className="bg-accent p-4 rounded-lg border">
                        <p className="text-accent-foreground font-medium">
                            <Shield className="w-5 h-5 inline mr-2" />
                            All personal information is stored securely within Pakistan and is never shared without your consent.
                        </p>
                    </div>
                </div>

                {/* Information We Collect */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Database className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Information We Collect</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-card-foreground mb-2">Personal Information</h3>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• Name, age, contact details, and photos</li>
                                <li>• Educational and professional background</li>
                                <li>• Religious preferences and family details</li>
                                <li>• Location within Pakistan</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-card-foreground mb-2">Usage Information</h3>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• Profile interactions and preferences</li>
                                <li>• Communication patterns</li>
                                <li>• Device information for security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How We Use Information */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Users className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">How We Use Your Information</h2>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Creating and maintaining your matrimonial profile</li>
                        <li>• Matching you with compatible partners</li>
                        <li>• Facilitating secure communication</li>
                        <li>• Enabling family involvement in the process</li>
                        <li>• Improving our matching algorithms</li>
                        <li>• Ensuring platform security and safety</li>
                    </ul>
                </div>

                {/* Information Sharing */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Eye className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Information Sharing</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-card-foreground mb-2">What We Share</h3>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• Profile information with matched users</li>
                                <li>• Communication through our secure messaging</li>
                                <li>• Family details with your consent</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-card-foreground mb-2">What We Never Share</h3>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• Personal contact information without consent</li>
                                <li>• Private messages or conversations</li>
                                <li>• Information with third-party advertisers</li>
                                <li>• Financial or payment details</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Data Security */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Data Security</h2>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Industry-standard encryption for all data</li>
                        <li>• Secure servers hosted within Pakistan</li>
                        <li>• Regular security audits and monitoring</li>
                        <li>• Multi-factor authentication available</li>
                        <li>• Islamic compliance in all interactions</li>
                    </ul>
                </div>

                {/* Your Rights */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Lock className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Your Rights</h2>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Access and update your information anytime</li>
                        <li>• Control who can view your profile</li>
                        <li>• Manage communication preferences</li>
                        <li>• Download your data</li>
                        <li>• Delete your account permanently</li>
                        <li>• Set privacy preferences for family involvement</li>
                    </ul>
                </div>

                {/* Data Retention */}
                <div className="bg-card rounded-lg shadow-sm p-6 mb-6 border">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Database className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Data Retention</h2>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Active profiles: Data retained while account is active</li>
                        <li>• Deleted accounts: Most data deleted within 30 days</li>
                        <li>• Some data may be retained for legal compliance</li>
                        <li>• You must be 18+ to use our services</li>
                    </ul>
                </div>


            </div>
        </div>
    );
}