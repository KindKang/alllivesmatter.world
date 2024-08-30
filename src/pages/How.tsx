import React, { useState } from 'react';
import { Users, GraduationCap, Briefcase, HeartPulse, Scale, MoreHorizontal, X } from 'lucide-react';
import ShareToWorld from '../components/ShareToWorld';
import { useAdvocacyData, useCommonData, useHowData } from '../data/data_provider';
import AlmIcon from '../components/AlmIcon';

const How = () => {
    const data = useHowData();
    const advocacyData = useAdvocacyData();
    const commonData = useCommonData();
    // const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

    return (
        <div className="bg-gray-900 text-white p-8 w-full mb-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center selectable-text">{data.contribute_text}</h2>
                <main className="container mx-auto">
                    <p className="text-center text-gray text-[#d20033] selectable-text">{data.contribute_by_share_text}</p>
                    <ShareToWorld data={commonData} />
                    <div className="text-center">
                        <h3 className="text-2xl mb-6 text-[#d20033] selectable-text">{data.contribute_by_action_text}</h3>
                        <div className="space-y-6 mb-8">
                            {advocacyData.advocacy_details.map((advocate, index) => (
                                <div className="flex items-center justify-center space-x-2  ">
                                    <AlmIcon value={advocate.icon} className="text-yellow-500 " size={16} />
                                    <h4 className="text-2xl font-bold selectable-text" dangerouslySetInnerHTML={{ __html: advocate.content }} />
                                    <AlmIcon value={advocate.icon} className="text-yellow-500" size={16} />
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default How;