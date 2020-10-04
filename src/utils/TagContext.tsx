import { useState, createContext, useContext } from "react";

interface ITagContext {
	tags: string[];
	addTag(newTag: string): void;
	deleteTag(newTag: string): void;
	diseases: number[];
	addDisease(newDisease: number): void;
	deleteDisease(newDisease: number): void;
}

const TagContext = createContext<ITagContext | null>(null);

export const useTags = () => {
	return useContext(TagContext);
};

export const TagProvider: React.FC = ({ children }) => {
	const [tags, setTags] = useState<Array<string>>([]);
	const [diseases, setDiseases] = useState<Array<number>>([]);

	const addTag = (newTag: string) => {
		setTags(oldTags => [...oldTags, newTag]);
	};

	const deleteTag = (oldTag: string) => {
		const newTags = tags.filter(tag => tag !== oldTag);
		setTags(newTags);
	};

	const addDisease = (newDisease: number) => {
		setDiseases(diseases => [...diseases, newDisease]);
	};

	const deleteDisease = (newDisease: number) => {
		const newDiseases = diseases.filter(disease => disease !== newDisease);
		setDiseases(newDiseases);
	};

	return (
		<TagContext.Provider
			value={{
				tags,
				addTag,
				deleteTag,
				diseases,
				addDisease,
				deleteDisease,
			}}
		>
			{children}
		</TagContext.Provider>
	);
};
