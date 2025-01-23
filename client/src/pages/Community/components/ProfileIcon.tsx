import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface ProfileIconProps {
  user: { email: string };
  onLogout: () => void;
  onRoleChange: (isAdmin: boolean) => void;
  isAdmin: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ user, onLogout, onRoleChange, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center space-x-4 relative">
      <div className="dropdown">
        <button className="btn-primary" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {isOpen && (
          <div className="dropdown-menu bg-white shadow-lg rounded-md mt-2">
            <button className="btn-secondary block w-full text-left px-4 py-2 hover:bg-gray-200">
              {user.email}
            </button>
            <button onClick={onLogout} className="btn-secondary block w-full text-left px-4 py-2 hover:bg-gray-200">
              Logout
            </button>
            {isAdmin && (
              <>
                <button onClick={() => onRoleChange(true)} className="btn-secondary block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Set as Admin
                </button>
                <button onClick={() => onRoleChange(false)} className="btn-secondary block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Set as User
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;