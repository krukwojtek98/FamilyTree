export interface Member {
    id: number;
    name: string;
}

export interface SourceMember {
    id: number;
    name: string;
}

export interface TargetMember {
    id: number;
    name: string;
}

export interface Relation {
    id: number;
    sourceMemberId: number;
    sourceMember: SourceMember;
    targetMemberId: number;
    targetMember: TargetMember;
    relationType: number;
}

export interface Tree {
    id: number;
    name: string;
    members: Member[];
    relations: Relation[];
}

export interface GetUser {
    email: string;
    name: string;
    trees: Tree[];
}