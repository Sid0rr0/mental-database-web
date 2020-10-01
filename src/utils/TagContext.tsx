import { useState, createContext, useContext } from "react";

interface ITagContext {
	tags: string[];
	addTag(newTag: string): void;
	deleteTag(newTag: string): void;
}

const TagContext = createContext<ITagContext | null>(null);

export const useTags = () => {
	return useContext(TagContext);
};

export const TagProvider: React.FC = ({ children }) => {
	const [tags, setTags] = useState<Array<string>>([]);

	const addTag = (newTag: string) => {
		setTags(oldTags => [...oldTags, newTag]);
	};

	const deleteTag = (oldTag: string) => {
		const newTags = tags.filter(tag => tag !== oldTag);
		setTags(newTags);
	};

	return (
		<TagContext.Provider value={{ tags, addTag, deleteTag }}>
			{children}
		</TagContext.Provider>
	);
};
