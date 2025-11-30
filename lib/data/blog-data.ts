// lib/data/blog-data.ts

import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  { id: '1', name: 'Architecture', slug: 'architecture' },
  { id: '2', name: 'Design', slug: 'design' },
  { id: '3', name: 'Projects', slug: 'projects' },
  { id: '4', name: 'News', slug: 'news' },
  { id: '5', name: 'Sustainability', slug: 'sustainability' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'modern-office-design-trends',
    title: 'Modern Office Design Trends in 2025',
    excerpt: 'Explore the latest office design trends that foster collaboration, productivity, and sustainability in the modern workplace.',
    content: `Designing modern offices today goes far beyond aesthetics. Companies are focusing on flexible layouts, employee wellness, and sustainable practices. Open-plan workspaces are complemented by quiet zones and collaborative hubs, allowing employees to switch between focused work and teamwork seamlessly. Technology integration is also key, with smart lighting, climate control, and digital collaboration tools enhancing productivity.

Collaborative spaces encourage creativity and interaction, while biophilic design brings natural elements indoors to improve air quality and mental well-being. Sustainability has become a core principle, with energy-efficient lighting, recycled materials, and eco-friendly furniture becoming standard. Designers are also incorporating adaptable workstations, modular furniture, and smart storage solutions that can evolve with changing team needs.

The modern workplace is no longer just a place to complete tasks—it's an environment designed to inspire innovation and support diverse work styles. Companies are investing in ergonomic furniture that promotes health and reduces workplace injuries. Adjustable standing desks, supportive seating, and proper lighting reduce strain and increase comfort during long work hours.

Acoustic design has become crucial in open offices. Sound-absorbing materials, strategic placement of meeting rooms, and white noise systems help maintain focus in shared spaces. Privacy pods and phone booths provide quiet areas for calls and concentrated work without isolating employees from the team.

Wellness amenities are transforming offices into holistic environments. On-site gyms, meditation rooms, healthy cafeterias, and outdoor terraces encourage physical activity and mental breaks. These features improve employee satisfaction, reduce stress, and create a culture that values work-life balance.

Additionally, aesthetics and branding remain important — color palettes, artwork, and architectural features are used to create spaces that inspire and reflect a company's culture. Modern office trends continue to balance functionality, employee satisfaction, and environmental responsibility, shaping the workplaces of tomorrow.`,
    category: ['ARCHITECTURE', 'DESIGN'],
    author: {
      name: 'Alice Morgan',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    publishedAt: '2025-05-15',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    tags: ['office', 'workspace', 'trends', 'design'],
  },
  {
    id: '2',
    slug: 'sustainable-residential-projects',
    title: 'Sustainable Residential Projects Transforming Cities',
    excerpt: 'Discover how sustainable residential projects are reshaping urban living, combining eco-friendly materials with smart architecture.',
    content: `Urban residential projects are embracing sustainability like never before. Green rooftops, passive ventilation, and energy-efficient design reduce environmental impact while improving living quality. Developers are implementing smart home technology to monitor energy use, control lighting, and optimize temperature, creating both eco-friendly and comfortable living spaces.

Eco-conscious materials like recycled steel, reclaimed wood, and low-VOC paints are now common, and rainwater harvesting, solar panels, and green facades are integrated to reduce carbon footprints. Landscape design is also crucial, with green courtyards, community gardens, and outdoor leisure areas improving residents' health and social interaction.

The shift toward sustainable residential design reflects growing awareness of climate change and resource scarcity. Architects are reimagining buildings not just as shelters, but as active contributors to environmental health. Green roofs reduce urban heat islands, absorb rainwater, and provide habitats for local wildlife. Some projects incorporate beehives and butterfly gardens, promoting urban biodiversity.

Water conservation strategies extend beyond rainwater harvesting. Greywater recycling systems reuse water from sinks and showers for irrigation and toilet flushing, significantly reducing consumption. Low-flow fixtures and drought-resistant landscaping further minimize water waste without sacrificing comfort or aesthetics.

Energy independence is becoming achievable for residential buildings. Advanced solar panel systems, paired with battery storage, allow homes to generate and store their own electricity. Some developments even sell excess energy back to the grid, turning buildings into mini power stations. Geothermal heating and cooling systems tap into stable underground temperatures, providing efficient climate control year-round.

Community-focused design enhances sustainability's social dimension. Shared amenities like tool libraries, community kitchens, and co-working spaces reduce individual consumption while fostering connections among neighbors. Car-sharing programs and bike storage encourage alternative transportation, reducing emissions and promoting healthier lifestyles.

These sustainable residential projects are redefining urban landscapes, promoting environmentally responsible living without compromising style, comfort, or functionality. Cities are beginning to reflect these modern ideals, creating neighborhoods that prioritize both people and the planet.`,
    category: ['ARCHITECTURE', 'SUSTAINABILITY'],
    author: {
      name: 'David Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    publishedAt: '2025-04-20',
    readTime: '9 min read',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    tags: ['sustainability', 'residential', 'green', 'architecture'],
  },
  {
    id: '3',
    slug: 'award-winning-commercial-buildings',
    title: 'Award-Winning Commercial Buildings of the Year',
    excerpt: 'A showcase of commercial architecture that pushes the boundaries of design, innovation, and functionality in urban landscapes.',
    content: `This year's award-winning commercial buildings showcase a combination of innovative design, sustainable construction, and functionality. Architects are redefining skylines with bold geometric shapes, open atriums, and creative use of natural light. These structures provide efficient workspaces, integrate advanced technologies, and meet high sustainability standards.

Beyond aesthetics, these buildings have a measurable impact on urban environments. Green roofs, energy-efficient systems, and eco-friendly materials reduce carbon emissions while promoting healthier indoor environments. Community engagement is also a focus, with shared spaces, public gardens, and pedestrian-friendly areas integrated into designs.

The awarded buildings demonstrate how commercial architecture can serve multiple purposes simultaneously. They function as workplaces, public gathering spaces, and landmarks that define city identities. Innovative facade systems respond to sunlight and weather conditions, reducing energy consumption while creating dynamic visual experiences that change throughout the day.

Indoor environmental quality receives unprecedented attention in these projects. Advanced HVAC systems maintain optimal temperature and humidity while continuously filtering air to remove pollutants and pathogens. Abundant natural light, supplemented by circadian lighting systems, supports occupant health and productivity. Access to views and outdoor spaces provides psychological benefits that translate into better workplace performance.

Technology integration extends beyond building systems to user experience. Mobile apps allow occupants to reserve spaces, adjust environmental controls, and navigate facilities. Digital wayfinding, interactive displays, and smart elevators create seamless, intuitive experiences. These features attract tenants seeking modern, efficient spaces that support contemporary work practices.

Structural innovation enables previously impossible designs. Long-span structures create column-free spaces with maximum flexibility. Cantilevers and dramatic overhangs make architectural statements while providing shaded outdoor areas. Advanced materials like high-performance concrete and engineered timber combine strength with sustainability, reducing environmental impact without compromising structural integrity.

The result is a seamless blend of beauty, purpose, and environmental consciousness that sets new benchmarks for modern commercial architecture.`,
    category: ['PROJECTS', 'DESIGN'],
    author: {
      name: 'Maria Lopez',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    publishedAt: '2025-03-10',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['commercial', 'award', 'architecture', 'design'],
  },
  {
    id: '4',
    slug: 'architecture-news-april-2025',
    title: 'Architecture News: April 2025 Highlights',
    excerpt: 'Stay updated with the latest news, upcoming projects, and industry insights from the world of architecture and urban design.',
    content: `April 2025 brings exciting updates in architecture and urban design. New projects are underway across major cities, combining innovative design solutions with sustainability. Architects are experimenting with mixed-use developments, green technologies, and adaptive reuse of historical buildings to meet modern needs.

Industry experts highlight trends such as energy-efficient construction, biophilic design, and community-centered planning. Urban spaces are increasingly designed to promote social interaction, accessibility, and environmental stewardship. Residents and stakeholders alike benefit from spaces that are functional, aesthetically pleasing, and sustainable.

Major announcements this month include groundbreaking ceremonies for three landmark projects that will transform their respective cities. These developments prioritize pedestrian experiences, integrate public transit, and create vibrant mixed-use neighborhoods where people can live, work, and socialize without requiring cars.

Adaptive reuse continues gaining momentum as cities recognize the value of preserving architectural heritage while meeting contemporary needs. Historic factories, warehouses, and office buildings are being transformed into residential lofts, creative studios, and cultural venues. These projects maintain character and reduce environmental impact compared to new construction.

Policy changes are shaping the industry's future. New building codes mandate higher energy efficiency standards, while incentive programs encourage developers to exceed minimum requirements. Carbon reporting requirements are making environmental impact transparent, driving competition to achieve net-zero or carbon-negative buildings.

Technology is revolutionizing both design and construction processes. Generative design algorithms explore thousands of design options, optimizing for multiple criteria simultaneously. Building Information Modeling enables better coordination among design teams, reducing errors and waste. Prefabrication and modular construction techniques speed project delivery while improving quality control.

As cities grow, these projects reflect a commitment to shaping future urban landscapes responsibly and creatively.`,
    category: ['NEWS'],
    author: {
      name: 'Liam O Connor',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
    publishedAt: '2025-04-05',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    tags: ['news', 'architecture', 'projects', 'urban'],
  },
  {
    id: '5',
    slug: 'biophilic-design-principles',
    title: 'Biophilic Design: Bringing Nature Into Built Environments',
    excerpt: 'Learn how biophilic design principles are creating healthier, more productive spaces by reconnecting occupants with the natural world.',
    content: `Biophilic design recognizes humans' innate connection to nature and incorporates natural elements into built environments. This approach goes beyond adding potted plants—it's a comprehensive strategy that improves health, productivity, and well-being. Research shows that exposure to natural elements reduces stress, enhances cognitive function, and accelerates healing.

Natural light is the foundation of biophilic design. Large windows, skylights, and light wells bring daylight deep into buildings, supporting circadian rhythms and reducing dependence on artificial lighting. Strategic window placement frames views of nature, providing visual connections to outdoor environments even from interior spaces.

Living walls and green roofs integrate vegetation directly into building structures. These features improve air quality by filtering pollutants, reduce urban heat island effects, and provide habitat for birds and insects. Interior plantscaping creates focal points while contributing to acoustic comfort and humidity regulation.

Natural materials like wood, stone, and bamboo create tactile and visual connections to nature. These materials age gracefully, developing patina that adds character over time. Their varied textures, colors, and patterns provide visual interest and complexity that artificial materials struggle to match.

Water features engage multiple senses with sound, movement, and reflection. Fountains, reflecting pools, and aquariums create calming focal points that reduce ambient noise and provide opportunities for contemplation. Even small-scale water elements can significantly impact occupant experience and satisfaction.

Biomorphic forms and patterns mimic natural shapes and geometries. Curved surfaces, fractal patterns, and organic layouts feel intuitively comfortable and engaging. These design elements can be subtle—incorporated into furniture, artwork, or architectural details—yet they profoundly influence how people experience spaces.

The benefits extend beyond individual well-being to organizational performance. Offices with biophilic design report higher employee satisfaction, reduced absenteeism, and improved productivity. Healthcare facilities see shorter patient recovery times and reduced pain medication use. Educational environments show improved student focus and test scores.

As understanding of biophilia deepens, designers are finding innovative ways to integrate nature into every building type and climate. The result is architecture that supports human health and happiness while respecting environmental limits.`,
    category: ['DESIGN', 'SUSTAINABILITY'],
    author: {
      name: 'Emma Thompson',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    publishedAt: '2025-05-02',
    readTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    tags: ['biophilic', 'design', 'wellness', 'nature'],
  },
  {
    id: '6',
    slug: 'adaptive-reuse-success-stories',
    title: 'Adaptive Reuse Success Stories: Old Buildings, New Life',
    excerpt: 'Explore inspiring examples of adaptive reuse projects that preserved historic character while creating vibrant, functional spaces for modern use.',
    content: `Adaptive reuse breathes new life into existing structures, preserving architectural heritage while meeting contemporary needs. These projects avoid demolition waste, maintain neighborhood character, and often prove more economical than new construction. The most successful transformations respect original design intent while boldly reimagining function and program.

Historic factories excel as modern workspaces and residential lofts. High ceilings, large windows, and open floor plans translate perfectly to contemporary uses. Exposed brick, heavy timber beams, and industrial details provide character that new construction cannot replicate. Modern systems integrate discretely, maintaining aesthetic integrity while meeting current performance standards.

Religious buildings pose unique adaptive reuse challenges due to distinctive architecture and community significance. Converting churches, synagogues, and temples into cultural venues, community centers, or residences requires sensitivity to original purpose while creating viable new uses. Successful projects maintain significant architectural features—stained glass, vaulted ceilings, ornamental details—while introducing compatible contemporary elements.

Commercial buildings from mid-century offer adaptive reuse opportunities in many city centers. Their robust construction and generous floor-to-ceiling heights accommodate residential conversion, boutique hotels, or creative office spaces. Updating mechanical systems, adding amenities, and improving energy performance make these buildings competitive with new construction while preserving embodied carbon and urban fabric.

Institutional buildings like schools and hospitals often outlive their original functions but remain structurally sound and well-located. Their cellular layouts adapt readily to residential uses, while large rooms become community spaces, restaurants, or retail. Preserving institutional character—tile work, terrazzo floors, wood paneling—creates distinctive spaces that command premium rents and attract quality tenants.

Challenges include updating building systems, meeting current codes, and addressing deferred maintenance. However, creative design solutions overcome these obstacles while maintaining historic character. Incentives like historic tax credits improve project economics, making adaptive reuse financially competitive with new development.

Communities benefit when adaptive reuse preserves neighborhood identity and maintains built heritage. These projects create continuity between past and present, telling stories about places and people. As cities mature and available development sites become scarce, adaptive reuse will play an increasingly important role in urban development.

The most inspiring projects demonstrate that old buildings can perform as well as new ones while offering unique character and sustainability benefits. They prove that preservation and progress are not competing priorities but complementary approaches to creating better cities.`,
    category: ['PROJECTS', 'SUSTAINABILITY'],
    author: {
      name: 'James Mitchell',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    publishedAt: '2025-04-18',
    readTime: '11 min read',
    featuredImage: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=1200&q=80',
    tags: ['adaptive reuse', 'preservation', 'historic', 'sustainability'],
  },
  {
    id: '7',
    slug: 'smart-building-technology-2025',
    title: 'Smart Building Technology: The Future is Now',
    excerpt: 'Discover how IoT sensors, AI, and automation are transforming buildings into responsive environments that optimize energy use and occupant comfort.',
    content: `Smart building technology is revolutionizing how structures operate and respond to occupant needs. Internet of Things sensors collect real-time data about temperature, humidity, air quality, occupancy, and energy consumption. Artificial intelligence analyzes this information, making autonomous decisions that optimize performance while reducing operational costs.

Building automation systems coordinate HVAC, lighting, and security systems for maximum efficiency. Occupancy sensors adjust heating and cooling based on actual space use rather than schedules, significantly reducing energy waste. Daylight harvesting systems dim artificial lighting when natural light is sufficient, cutting electricity consumption while maintaining ideal illumination levels.

Predictive maintenance uses sensor data and machine learning to identify equipment problems before failures occur. This approach reduces downtime, extends equipment life, and prevents costly emergency repairs. Maintenance staff receive alerts when filters need changing, motors show wear patterns, or systems operate outside normal parameters.

User experience improves through mobile apps and voice control. Occupants adjust temperature, lighting, and blinds from smartphones or voice assistants. Conference room booking systems show real-time availability and automatically configure spaces for scheduled meetings. Wayfinding applications guide visitors through complex buildings, reducing confusion and improving first impressions.

Energy management systems provide unprecedented visibility into consumption patterns. Building operators identify waste, compare performance across properties, and validate that efficiency measures deliver promised savings. Integration with utility rates enables demand response programs that reduce consumption during peak periods, lowering costs while supporting grid stability.

Indoor air quality monitoring gained importance following pandemic concerns. Advanced filtration, UV sterilization, and continuous air quality measurement ensure healthy environments. Systems adjust ventilation rates based on occupancy and pollutant levels, balancing health requirements with energy efficiency.

Security systems integrate access control, video surveillance, and threat detection into unified platforms. Facial recognition and mobile credentials provide convenient, secure building access. AI-powered video analytics identify unusual behavior patterns, alerting security staff to potential threats while reducing false alarms.

Integration challenges remain as buildings incorporate systems from multiple vendors. Open protocols and standardized data formats enable interoperability, allowing different systems to share information and coordinate actions. Cloud platforms provide centralized control and analytics across portfolio properties.

As technology costs decrease and capabilities expand, smart building features are becoming standard rather than luxury amenities. The buildings that perform best combine advanced technology with thoughtful design, creating environments that support occupant needs while minimizing environmental impact.`,
    category: ['ARCHITECTURE', 'NEWS'],
    author: {
      name: 'Sophie Anderson',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    },
    publishedAt: '2025-05-08',
    readTime: '12 min read',
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['smart buildings', 'technology', 'IoT', 'automation'],
  },
  {
    id: '8',
    slug: 'community-centered-architecture',
    title: 'Community-Centered Architecture: Designing for People',
    excerpt: 'How participatory design processes and community engagement are creating buildings that truly serve the people who use them.',
    content: `Community-centered architecture recognizes that the best buildings emerge from collaboration between designers and users. Participatory design processes engage stakeholders throughout project development, ensuring that spaces reflect actual needs rather than designer assumptions. This approach creates stronger connections between people and places while improving project outcomes.

Engagement begins early with listening sessions and workshops that gather input from diverse community members. Designers facilitate conversations about needs, aspirations, and concerns. Visual preference surveys, hands-on exercises, and site walks help participants articulate their vision for projects. These activities build consensus and identify priorities that guide design decisions.

Co-design workshops invite stakeholders to actively participate in creating solutions. Using models, drawings, and digital tools, community members explore options and provide immediate feedback. This collaborative process generates ideas that designers might not conceive independently while building ownership and excitement for projects.

Youth engagement ensures that young voices shape spaces they will inherit. School partnerships, design competitions, and student workshops tap into creativity and fresh perspectives. Projects that involve young people often include innovative features that adults might overlook, creating more inclusive, forward-thinking designs.

Ongoing communication maintains engagement throughout design and construction. Regular updates, open houses, and progress reports keep stakeholders informed and invested. Construction site tours provide tangible connections to projects, building anticipation for completion while educating communities about building processes.

Post-occupancy evaluation closes the feedback loop, documenting how spaces perform and what improvements could benefit future projects. User surveys, focus groups, and space utilization studies reveal whether designs meet objectives. This information informs both building adjustments and future project approaches.

Community-centered design often reveals needs that traditional approaches miss. Public restrooms, gender-neutral facilities, prayer rooms, lactation spaces, and community kitchens emerge as priorities when users guide programming. Incorporating these elements creates more inclusive, functional spaces that serve diverse populations.

The process itself builds social capital and community capacity. Participants develop new skills, form relationships, and gain confidence in shaping their built environment. Projects become catalysts for continued community engagement and activism around neighborhood improvement.

Successful community-centered projects demonstrate that inclusive design processes create better buildings while strengthening social fabric. They prove that architecture is not just about buildings but about people, relationships, and the communities we create together.`,
    category: ['DESIGN', 'PROJECTS'],
    author: {
      name: 'Michael Santos',
      avatar: 'https://randomuser.me/api/portraits/men/74.jpg',
    },
    publishedAt: '2025-04-28',
    readTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tags: ['community', 'participatory design', 'engagement', 'inclusive'],
  },
];

// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post =>
    post.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};