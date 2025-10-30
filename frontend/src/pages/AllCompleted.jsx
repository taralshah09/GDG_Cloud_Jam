import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllCompleted.css';
import { getAllComplete } from '../services/api';

function AllCompleted() {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [houseFilter, setHouseFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        fetchAllCompleted()
    }, [])

    const fetchAllCompleted = async () => {
        try {
            const res = await getAllComplete();
            setData(res.data.data);
        } catch (error) {
            console.error('Error fetching all completed data:', error);
        } 
    };

    const leaderboardData = data?.leaderboard || [];
    const totalCompleted = data?.count || 0;

    // Tier configuration
    const tiers = [
        { name: 'Tier 1 - Gold', threshold: 100, color: '#F57C00', bgColor: '#FBE9E7', icon: '🥇' },
        { name: 'Tier 2 - Silver', threshold: 70, color: '#546E7A', bgColor: '#ECEFF1', icon: '🥈' },
        { name: 'Tier 3 - Bronze', threshold: 50, color: '#D84315', bgColor: '#FFF3E0', icon: '🥉' }
    ];

    // Determine active tier
    const getActiveTier = () => {
        if (totalCompleted >= 100) return tiers[0];
        if (totalCompleted >= 70) return tiers[1];
        if (totalCompleted >= 50) return tiers[2];
        return null;
    };

    const activeTier = getActiveTier();

    const getEligibleCount = () => {
        if (!activeTier) return 0;
        return activeTier.threshold;
    };

    const getWaitingCount = () => {
        if (!activeTier) return totalCompleted;
        return Math.max(0, totalCompleted - activeTier.threshold);
    };

    const getHouseName = (houseId) => {
        const houses = {
            1: 'Alpha',
            2: 'Bravo',
            3: 'Charlie',
            4: 'Delta',
            5: 'Enigma',
            6: 'Falcon',
            7: 'Gamma'
        };
        return houses[houseId] || 'Unknown';
    };

    const getParticipantStatus = (rank) => {
        if (!activeTier) return 'Waiting for Next Tier';
        return rank <= activeTier.threshold ? 'Eligible' : 'Waiting for Next Tier';
    };

    const getRemainingForTier = (threshold) => {
        return Math.max(0, threshold - totalCompleted);
    };

    // Filter participants
    const filteredParticipants = leaderboardData.filter(participant => {
        const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesHouse = houseFilter === 'all' || participant.house_id === parseInt(houseFilter);
        const participantStatus = getParticipantStatus(participant.rank);
        const matchesStatus = statusFilter === 'all' ||
            (statusFilter === 'eligible' && participantStatus === 'Eligible') ||
            (statusFilter === 'waiting' && participantStatus === 'Waiting for Next Tier');

        return matchesSearch && matchesHouse && matchesStatus;
    });

    const top3 = leaderboardData.slice(0, 3);

    return (
        <div className="hall-of-fame-container">
            {/* Header */}
            <div className="hall-header">
                <h1>🏆 Hall of Fame</h1>
                <p className="subtitle">Celebrating Our Cloud Champions</p>
            </div>

            {/* Tier Status Section */}
            <div className="tier-status-section">
                <div className="tier-cards">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`tier-card ${activeTier?.name === tier.name ? 'active' : ''} ${totalCompleted >= tier.threshold ? 'unlocked' : ''}`}
                            style={{
                                borderColor: totalCompleted >= tier.threshold ? tier.color : '#dadce0'
                            }}
                        >
                            <div className="tier-icon" style={{
                                background: totalCompleted >= tier.threshold ? tier.bgColor : '#f1f3f4',
                                color: totalCompleted >= tier.threshold ? tier.color : '#80868b'
                            }}>
                                {tier.icon}
                            </div>
                            <h3 className="tier-name" style={{
                                color: totalCompleted >= tier.threshold ? tier.color : '#5f6368'
                            }}>
                                {tier.name}
                            </h3>
                            <p className="tier-threshold">{tier.threshold} Participants</p>
                            {activeTier?.name === tier.name && (
                                <div className="tier-badge-active">ACTIVE</div>
                            )}
                            {totalCompleted >= tier.threshold && activeTier?.name !== tier.name && (
                                <div className="tier-badge-unlocked">UNLOCKED</div>
                            )}
                            {totalCompleted < tier.threshold && (
                                <div className="tier-remaining">
                                    {getRemainingForTier(tier.threshold)} remaining
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Current Status */}
                {activeTier && (
                    <div className="current-status" style={{ borderLeftColor: activeTier.color }}>
                        <h3>Current Status</h3>
                        <div className="status-info">
                            <div className="status-item">
                                <span className="status-label">Total Completed:</span>
                                <span className="status-value highlight">{totalCompleted}</span>
                            </div>
                            <div className="status-item">
                                <span className="status-label">Eligible Participants:</span>
                                <span className="status-value" style={{ color: '#388E3C' }}>{getEligibleCount()}</span>
                            </div>
                            <div className="status-item">
                                <span className="status-label">Waiting List:</span>
                                <span className="status-value" style={{ color: '#F57C00' }}>{getWaitingCount()}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Swag Announcement */}
            <div className="swag-announcement">
                <div className="swag-main-card">
                    <span className="swag-icon">🎁</span>
                    <div className="swag-content">
                        <h2 className="swag-heading">Exclusive Swags for Top 100 Champions!</h2>
                        <p className="swag-description">
                            Amazing swags will be provided to the <strong>first 100 students</strong> who complete all requirements.
                            Make sure you're in the <strong style={{ color: '#1e8e3e' }}>Eligible</strong> zone to claim your rewards!
                        </p>
                    </div>
                </div>

                <div className="swag-info-cards">
                    <div className="info-card eligible-card">
                        <div className="info-icon">✅</div>
                        <h3>You're Eligible?</h3>
                        <p>Congratulations! You've secured your spot in the top 100. Keep an eye out for swag distribution details!</p>
                    </div>
                    <div className="info-card waiting-card">
                        <div className="info-icon">🚀</div>
                        <h3>On the Waiting List?</h3>
                        <p>Don't worry! Push your friends and teammates to complete their requirements. When enough participants join, we'll unlock the next tier and you'll become eligible!</p>
                    </div>
                </div>

                <div className="swag-cta">
                    <p className="cta-text">
                        <strong>💡 Pro Tip:</strong> The more students who complete their badges, the faster we unlock new tiers.
                        Share your progress and motivate your peers to join the Cloud Champions community!
                    </p>
                </div>
            </div>

            {/* Top 3 Podium */}
            {top3.length > 0 && (
                <div className="podium-section">
                    <h2 className="section-title">🌟 Top Champions</h2>
                    <div className="podium">
                        {/* Second Place */}
                        {top3[1] && (
                            <div className="podium-place second">
                                <div className="podium-card">
                                    <div className="podium-rank">🥈</div>
                                    <div className="podium-name">{top3[1].name}</div>
                                    <div className="podium-house">{getHouseName(top3[1].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[1].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[1].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[1].total_completed} Total</div>
                                    <a href={top3[1].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand second-stand">
                                    <div className="stand-number">2</div>
                                </div>
                            </div>
                        )}

                        {/* First Place */}
                        {top3[0] && (
                            <div className="podium-place first">
                                <div className="podium-card">
                                    <div className="podium-rank">🥇</div>
                                    <div className="podium-name">{top3[0].name}</div>
                                    <div className="podium-house">{getHouseName(top3[0].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[0].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[0].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[0].total_completed} Total</div>
                                    <a href={top3[0].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand first-stand">
                                    <div className="stand-number">1</div>
                                </div>
                            </div>
                        )}

                        {/* Third Place */}
                        {top3[2] && (
                            <div className="podium-place third">
                                <div className="podium-card">
                                    <div className="podium-rank">🥉</div>
                                    <div className="podium-name">{top3[2].name}</div>
                                    <div className="podium-house">{getHouseName(top3[2].house_id)}</div>
                                    <div className="podium-stats">
                                        <span className="podium-stat badges">{top3[2].badges_completed} Badges</span>
                                        <span className="podium-stat labs">{top3[2].labs_completed} Labs</span>
                                    </div>
                                    <div className="podium-total">{top3[2].total_completed} Total</div>
                                    <a href={top3[2].profileUrl} target="_blank" rel="noopener noreferrer" className="podium-link">
                                        View Profile →
                                    </a>
                                </div>
                                <div className="podium-stand third-stand">
                                    <div className="stand-number">3</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* All Participants Table */}
            {leaderboardData.length > 0 && (
                <div className="participants-section">
                    <h2 className="section-title">All Champions</h2>

                    {/* Filters */}
                    <div className="table-filters">
                        <div className="filter-item search-filter">
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="filter-item">
                            <select
                                value={houseFilter}
                                onChange={(e) => setHouseFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Houses</option>
                                <option value="1">Alpha</option>
                                <option value="2">Bravo</option>
                                <option value="3">Charlie</option>
                                <option value="4">Delta</option>
                                <option value="5">Enigma</option>
                                <option value="6">Falcon</option>
                                <option value="7">Gamma</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Status</option>
                                <option value="eligible">Eligible</option>
                                <option value="waiting">Waiting for Next Tier</option>
                            </select>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="results-count">
                        Showing {filteredParticipants.length} of {leaderboardData.length} participants
                    </div>

                    {/* Table */}
                    <div className="participants-table-wrapper">
                        <table className="participants-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>House</th>
                                    <th>Status</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredParticipants.map((participant) => {
                                    const status = getParticipantStatus(participant.rank);
                                    const isEligible = status === 'Eligible';

                                    return (
                                        <tr key={participant._id} className="table-row">
                                            <td className="rank-cell" data-label="Rank">
                                                <span className="rank-badge">#{participant.rank}</span>
                                            </td>
                                            <td className="name-cell" data-label="Name">{participant.name}</td>
                                            <td className="house-cell" data-label="House">
                                                <span className={`house-badge house-${participant.house_id}`}>
                                                    {getHouseName(participant.house_id)}
                                                </span>
                                            </td>
                                            <td className="status-cell" data-label="Status">
                                                <span className={`status-badge ${isEligible ? 'status-eligible' : 'status-waiting'}`}>
                                                    {isEligible ? '✓ Eligible' : '⏳ Waiting'}
                                                </span>
                                            </td>
                                            <td className="action-cell" data-label="Profile">
                                                <a
                                                    href={participant.profileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="view-link"
                                                >
                                                    View Profile
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {filteredParticipants.length === 0 && (
                        <div className="no-results">
                            <p>No participants found matching your filters.</p>
                        </div>
                    )}
                </div>
            )}

            {leaderboardData.length === 0 && (
                <div className="no-data">
                    <p>No participants have completed the requirements yet.</p>
                </div>
            )}
        </div>
    );
}

export default AllCompleted;