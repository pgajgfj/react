
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import './PhotoInput.css';

const SortableItem = sortableElement(({ photo, onRemove }) => (
    <div className="photo-preview">
        <img src={URL.createObjectURL(photo)} alt="Preview" />
        <button type="button" onClick={() => onRemove(photo)}>Remove</button>
    </div>
));

const SortableList = sortableContainer(({ items, onRemove }) => (
    <div className="photo-preview-list">
        {items.map((photo, index) => (
            <SortableItem key={photo.name} index={index} photo={photo} onRemove={onRemove} />
        ))}
    </div>
));

const PhotoInput = ({ photos, setPhotos, error }) => {
    const onDrop = useCallback((acceptedFiles) => {
        setPhotos([...photos, ...acceptedFiles]);
    }, [photos, setPhotos]);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setPhotos(arrayMoveImmutable(photos, oldIndex, newIndex));
    };

    const onRemove = (photoToRemove) => {
        setPhotos(photos.filter(photo => photo !== photoToRemove));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="photo-input">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag & drop some files here, or click to select files</p>
            </div>
            {error && <div className="error">{error}</div>}
            <SortableList items={photos} onSortEnd={onSortEnd} onRemove={onRemove} axis="xy" />
        </div>
    );
};

export default PhotoInput;
