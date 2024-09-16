import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FiSearch, FiX } from "react-icons/fi";

type TagSelectionModalProps = {
  show: boolean;
  handleClose: () => void;
  availableTags: string[]; // List of available tags to show
};

const TagSelectionModal = ({ show, handleClose, availableTags }: TagSelectionModalProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Add or remove tags from the selected list
  const toggleTagSelection = (tag: string) => {
    setSelectedTags(
      (prevSelected) =>
        prevSelected.includes(tag)
          ? prevSelected.filter((t) => t !== tag) // remove tag if it's already selected
          : [...prevSelected, tag] // add tag if it's not already selected
    );
  };

  // Filter tags based on the search term
  const filteredTags = availableTags.filter((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="wTitle">Select Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="selectPreference">
          <div className="row">
            <div className="col-md-6">
              <h5>Select at least 5 preferences to personalize your news feeds.</h5>

              <div className="spList">
                {filteredTags.map((tag) => (
                  <div
                    key={tag}
                    className={`splBox ${selectedTags.includes(tag) ? "selected" : ""}`}
                    onClick={() => toggleTagSelection(tag)} // Toggle tag selection
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group splSearch">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Tags"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
                />
                <FiSearch className="icon" />
              </div>

              <div className="spSelected">
                <div className="spList">
                  {selectedTags.map((tag) => (
                    <div key={tag} className="splBox">
                      <span>{tag}</span>
                      <FiX className="icon" onClick={() => toggleTagSelection(tag)} />
                    </div>
                  ))}
                </div>

                <button className="btn btn-primary" disabled={selectedTags.length < 5}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TagSelectionModal;
